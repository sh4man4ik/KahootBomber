import { chromium, devices, type Browser } from 'playwright';
import randomNickname from './helpers/randomNickname.ts';

// Data from the website
let gamePIN = '5799139';
let botsNumber = 44;

// Adding one bot to Kahoot
async function plusBot(browser: Browser) {
	let nickname = randomNickname();

	const context = await browser.newContext(devices['Galaxy S24']);
	const page = await context.newPage();
	await page.goto('https://kahoot.it/');

	await page.fill('input[name="gameId"]', gamePIN);
	await page.locator('button[data-functional-selector="join-game-pin"]').click();

	await page.fill('input[name="nickname"]', nickname);
	await page.locator('button[data-functional-selector="join-button-username"]').click();
}

// Adding the required number of bots to Kahoot
async function addingBots() {
	const browser = await chromium.launch({ headless: true });

	// Maximum number of participants in the free version of Kahoot (44)
	for (let i = 0; i < botsNumber; i++) {
		plusBot(browser);
		await new Promise((resolve) => setTimeout(resolve, 50));
	}

	// Wait 30 minutes
	await new Promise((resolve) => setTimeout(resolve, 1800000));
	await browser.close();
}
addingBots();
