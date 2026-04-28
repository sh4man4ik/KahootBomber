// @ts-ignore
import Kahoot from 'kahoot.js-latest';
import removeAllBots from './removeAllBots.ts';
import getRandomAnswer from '../helpers/getRandomAnswer.ts';
import getCorrectAnswer from '../helpers/getCorrectAnswer.ts';
import getRandomNickname from '../helpers/getRandomNickname.ts';
import { bots } from '../serverSetup.ts';

async function createBot(gamePin: any, answerTypes: any, botsKey: any) {
	let client = new Kahoot();
	let nickname = getRandomNickname();
	let currentQuizUUID: any;

	try {
		await client.join(gamePin, nickname);

		bots.get(botsKey).push(client);

		console.log('Bot joined!');
	} catch (error) {
		console.log(error);

		return;
	}

	client.on('QuizStart', async (quiz: any) => {
		let query = quiz.firstGameBlockData.question;
		const url = 'https://create.kahoot.it/rest/kahoots/?query=' + query + '&limit=1';

		try {
			const response = await fetch(url);

			if (response.ok) {
				const result = await response.json();
				currentQuizUUID = result.entities[0].card.uuid;
			} else {
				console.log(response.status);
			}
		} catch (error) {
			console.log(error);
		}
	});

	client.on('QuestionStart', async (question: any) => {
		let answer;

		try {
			if (answerTypes == 'random') {
				answer = await getRandomAnswer(question);
			} else {
				answer = await getCorrectAnswer(currentQuizUUID, question);
			}

			question.answer(answer);
		} catch (error) {
			question.answer(0);
		}
	});

	// End of game
	client.on('Podium', () => {
		removeAllBots(botsKey);
	});

	// Wait 30 minutes
	setTimeout(() => {
		removeAllBots(botsKey);
	}, 1800000);
}

export default createBot;
