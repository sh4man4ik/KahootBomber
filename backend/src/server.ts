import express from 'express';
import cors from 'cors';
import randomNickname from './helpers/randomNickname.ts';
// @ts-ignore
import Kahoot from 'kahoot.js-latest';

// Setup
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Server
app.get('/', (req, res) => {
	res.send('Express launched');
});

app.post('/api/sendBots', (req, res) => {
	let data = req.body;

	let gamePin = data.gamePin;
	let botsNumber = data.botsNumber;

	addingBots(gamePin, botsNumber);

	res.end();
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

// Adding one bot to Kahoot
function createBot(gamePin: any) {
	let client = new Kahoot();

	let nickname = randomNickname();

	client.join(gamePin, nickname);

	client.on('Joined', () => {
		console.log('Bot joined!');
	});

	client.on('QuestionStart', async (question: any) => {
		let randomSleepTime = (Math.floor(Math.random() * 5) + 1) * 1000;
		let randomAnswer = Math.floor(Math.random() * 4);

		await new Promise((resolve) => setTimeout(resolve, randomSleepTime));

		try {
			question.answer(randomAnswer);
		} catch (error) {
			question.answer(0);
		}
	});

	client.on('Podium', () => {
		console.log('Bot left!');
		client.leave();
	});

	client.on('Disconnect', () => {
		console.log('Bot left!');
		client.leave();
	});

	// Wait 30 minutes
	setTimeout(() => {
		console.log('Bot left!');
		client.leave();
	}, 1800000);
}

// Adding the required number of bots to Kahoot
async function addingBots(gamePin: any, botsNumber: any) {
	try {
		// Maximum number of participants in the free version of Kahoot (44)
		for (let i = 0; i < botsNumber; i++) {
			createBot(gamePin);
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
	} catch (error) {
		console.log(error);
	}
}
