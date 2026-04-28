function sendBots(url: any, gamePin: any, botsNumber: any, answerTypes: any, botsKey: any) {
	fetch(`${url}/api/sendBots`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			gamePin: gamePin,
			botsNumber: botsNumber,
			answerTypes: answerTypes,
			botsKey: botsKey
		})
	}).catch((error) => {
		console.log(error);
	});
}

export default sendBots;
