function removeBots(url: any, botsKey: any) {
	fetch(`${url}/api/removeBots`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			botsKey: botsKey
		})
	}).catch((error) => {
		console.log(error);
	});
}

export default removeBots;
