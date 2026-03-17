// @ts-ignore
import Kahoot from 'kahoot.js-latest';
import deleteBots from './deleteBots.ts';
import getRandomAnswer from '../helpers/getRandomAnswer.ts';
import getRandomNickname from '../helpers/getRandomNickname.ts';
import { bots } from '../serverSetup.ts';

async function createBot(gamePin: any, botsKey: any) {
	let client = new Kahoot();
	let nickname = getRandomNickname();

	try {
		await client.join(gamePin, nickname);

		bots.get(botsKey).push(client);

		console.log('Bot joined!');
	} catch (error) {
		console.log(error);

		return;
	}

	client.on('QuestionStart', async (question: any) => {
		let randomAnswer = await getRandomAnswer(question);

		try {
			question.answer(randomAnswer);
		} catch (error) {
			question.answer(0);
		}
	});

	// End of game
	client.on('Podium', () => {
		deleteBots(botsKey);
	});

	// Wait 30 minutes
	setTimeout(() => {
		deleteBots(botsKey);
	}, 1800000);
}

export default createBot;
