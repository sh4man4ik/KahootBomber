import addAllBots from '../kahoot/addAllBots.ts';
import { bots } from '../serverSetup.ts';

let sendBots = (req: any, res: any) => {
	let data = req.body;

	let gamePin = data.gamePin;
	let botsNumber = data.botsNumber;
	let answerTypes = data.answerTypes;
	let botsKey = data.botsKey;

	if (!bots.has(botsKey)) {
		bots.set(botsKey, []);
	}

	addAllBots(gamePin, botsNumber, answerTypes, botsKey);

	res.end();
};

export default sendBots;
