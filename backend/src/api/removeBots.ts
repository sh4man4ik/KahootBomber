import removeAllBots from '../kahoot/removeAllBots.ts';

let removeBots = (req: any, res: any) => {
	let data = req.body;
	let botsKey = data.botsKey;

	removeAllBots(botsKey);

	res.end();
};

export default removeBots;
