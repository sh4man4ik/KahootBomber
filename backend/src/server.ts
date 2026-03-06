import express from 'express';
import cors from 'cors';
import { chromium, devices, type Browser } from 'playwright';
import randomNickname from './helpers/randomNickname.ts';

// Setup
let browser: Browser;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Server
app.get('/', (req, res) => {
	res.send('Express launched');
});

app.post('/api/sendBots', (req, res) => {
	let data = req.body;

	let gamePin = data.gamePin;
	let botsNumber = data.botsNumber;

	addingBots(gamePin, botsNumber);

	res.end();
});

app.post('/api/turnOffBots', async (req, res) => {
	try {
		await browser.close();
	} catch (error) {
		console.log(error);
	}
	res.end();
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

// Adding one bot to Kahoot
async function plusBot(browser: Browser, gamePin: any) {
	let nickname = randomNickname();

	try {
		const context = await browser.newContext(devices['Galaxy S24']);
		const page = await context.newPage();
		await page.goto('https://kahoot.it/');

		await page.fill('input[name="gameId"]', gamePin);
		await page.locator('button[data-functional-selector="join-game-pin"]').click();

		await page.fill('input[name="nickname"]', nickname);
		await page.locator('button[data-functional-selector="join-button-username"]').click();
	} catch (error) {
		console.log(error);
	}
}

// Adding the required number of bots to Kahoot
async function addingBots(gamePin: any, botsNumber: any) {
	try {
		browser = await chromium.launch({ headless: true });

		// Maximum number of participants in the free version of Kahoot (44)
		for (let i = 0; i < botsNumber; i++) {
			plusBot(browser, gamePin);
			await new Promise((resolve) => setTimeout(resolve, 50));
		}

		// Wait 30 minutes
		await new Promise((resolve) => setTimeout(resolve, 1800000));
		await browser.close();
	} catch (error) {
		console.log(error);
	}
}
