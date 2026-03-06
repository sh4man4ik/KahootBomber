function turnOffBots(url: any) {
	fetch(`${url}/api/turnOffBots`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	}).catch((error) => {
		console.log(error);
	});
}

export default turnOffBots;
