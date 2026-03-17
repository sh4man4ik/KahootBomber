import addingBots from '../kahoot/addingBots.ts';
import { bots } from '../serverSetup.ts';

let sendBots = (req: any, res: any) => {
	let data = req.body;

	let gamePin = data.gamePin;
	let botsNumber = data.botsNumber;
	let botsKey = data.botsKey;

	if (!bots.has(botsKey)) {
		bots.set(botsKey, []);
	}
	addingBots(gamePin, botsNumber, botsKey);

	res.end();
};

export default sendBots;
