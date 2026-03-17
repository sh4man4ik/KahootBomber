import createBot from './createBot.ts';

async function addingBots(gamePin: any, botsNumber: any, botsKey: any) {
	try {
		for (let i = 0; i < botsNumber; i++) {
			createBot(gamePin, botsKey);
			await new Promise((resolve) => setTimeout(resolve, 50));
		}
	} catch (error) {
		console.log(error);
	}
}

export default addingBots;
