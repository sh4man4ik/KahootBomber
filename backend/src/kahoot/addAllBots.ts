import createBot from './createBot.ts';

async function addAllBots(gamePin: any, botsNumber: any, answerTypes: any, botsKey: any) {
	try {
		for (let i = 0; i < botsNumber; i++) {
			createBot(gamePin, answerTypes, botsKey);
			await new Promise((resolve) => setTimeout(resolve, 50));
		}
	} catch (error) {
		console.log(error);
	}
}

export default addAllBots;
