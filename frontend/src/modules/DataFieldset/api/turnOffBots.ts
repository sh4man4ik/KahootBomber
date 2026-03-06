function turnOffBots(url: any) {
	fetch(`${url}/api/turnOffBots`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export default turnOffBots;
