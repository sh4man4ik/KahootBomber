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

let bots = new Map();

// Server
app.get('/', (req, res) => {
	res.send('Express launched');
});

app.post('/api/sendBots', (req, res) => {
	let data = req.body;

	let gamePin = data.gamePin;
	let botsNumber = data.botsNumber;
	let botsKey = data.botsKey;

	if (!bots.has(botsKey)) {
		bots.set(botsKey, []);
	}
	addingBots(gamePin, botsNumber, botsKey);

	res.end();
});

app.post('/api/removeBots', (req, res) => {
	let data = req.body;

	let botsKey = data.botsKey;

	deleteBots(botsKey);

	res.end();
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

// Adding the required number of bots to Kahoot
async function addingBots(gamePin: any, botsNumber: any, botsKey: any) {
	try {
		// Maximum number of participants in the free version of Kahoot (44)
		for (let i = 0; i < botsNumber; i++) {
			createBot(gamePin, botsKey);
			await new Promise((resolve) => setTimeout(resolve, 50));
		}
	} catch (error) {
		console.log(error);
	}
}

// Adding one bot to Kahoot
function createBot(gamePin: any, botsKey: any) {
	let client = new Kahoot();
	bots.get(botsKey).push(client);

	let nickname = randomNickname();

	client.join(gamePin, nickname);

	client.on('Joined', () => {
		console.log('Bot joined!');
	});

	client.on('QuestionStart', async (question: any) => {
		let randomSleepTime = Math.round(Math.random() * 4500 + 500);
		let randomAnswer = Math.floor(Math.random() * 4);

		await new Promise((resolve) => setTimeout(resolve, randomSleepTime));

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

function deleteBots(botsKey: any) {
	let botsArray = bots.get(botsKey);

	for (let bot of botsArray) {
		bot.leave();
		console.log('Bot left!');
	}

	bots.delete(botsKey);
}
