import sendBots from './api/sendBots.ts';
import removeBots from './api/removeBots.ts';
import { app, port } from './serverSetup.ts';

app.post('/api/sendBots', sendBots);

app.post('/api/removeBots', removeBots);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

app.get('/', (req, res) => {
	res.send('Express launched');
});
