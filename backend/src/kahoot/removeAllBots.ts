import { bots } from '../serverSetup.ts';

function removeAllBots(botsKey: any) {
	let botsArray = bots.get(botsKey);

	if (botsArray) {
		try {
			for (let bot of botsArray) {
				bot.leave();
				console.log('Bot left!');
			}
		} catch (error) {
			console.log(error);
		}

		bots.delete(botsKey);
	}
}

export default removeAllBots;
