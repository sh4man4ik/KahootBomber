function sendBots(url: any, gamePin: any, botsNumber: any) {
	fetch(`${url}/api/sendBots`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			gamePin: gamePin,
			botsNumber: botsNumber
		})
	}).catch((error) => {
		console.log(error);
	});
}

export default sendBots;
