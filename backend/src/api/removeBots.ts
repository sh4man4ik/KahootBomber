import deleteBots from '../kahoot/deleteBots.ts';

let removeBots = (req: any, res: any) => {
	let data = req.body;
	let botsKey = data.botsKey;

	deleteBots(botsKey);

	res.end();
};

export default removeBots;
