import { bots } from '../serverSetup.ts';

function removeAllBots(botsKey: any) {
	let botsArray = bots.get(botsKey);

	if (botsArray) {
		for (let bot of botsArray) {
			bot.leave();
			console.log('Bot left!');
		}

		bots.delete(botsKey);
	}
}

export default removeAllBots;
