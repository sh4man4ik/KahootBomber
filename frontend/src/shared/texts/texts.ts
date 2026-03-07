const EN_TEXTS = {
	navbar: {
		title: 'KahootBomber'
	},
	hero: {
		title: 'Ready to add some bots to Kahoot?',
		text: 'Enter the game PIN, choose how many bots you want, and launch them in seconds',
		button: 'Get Started'
	},
	fieldset: {
		legend: 'Free bots for Kahoot',
		gamePin: {
			label: 'Game Pin',
			placeholder: '1234567',
			validatorHint: 'Must be a number'
		},
		botsNumber: {
			label: 'Bots Number',
			placeholder: '1-44',
			validatorHint: 'Must be between 1 to 44'
		},
		button: 'SEND BOTS'
	},
	result: {
		legend: 'Free bots for Kahoot',
		text: 'Your bots have been successfully sent! They will answer questions randomly during the game, usually within 5 seconds',
		button: 'Back'
	},
	FAQ: {
		firstQuestion: {
			title: 'Is the website free to use?',
			text: 'Yes, the website is completely free to use.'
		},
		secondQuestion: {
			title: 'Is it safe to use this website?',
			text: 'Yes, it is safe. The website does not collect or use your personal data.'
		},
		thirdQuestion: {
			title: 'Why is the bot limit 1–44?',
			text: 'The limit exists because in the free version of the game only up to 44 players can join a match.'
		}
	},
	footer: {
		text: `Copyright © ${new Date().getFullYear()} - Made with love ❤️`
	}
};
/* Here you can add other languages */

function getText(path: string) {
	let language = navigator.language.slice(0, 2);
	let TEXTS: any;

	switch (language) {
		case 'en':
			TEXTS = EN_TEXTS;
			break;
		/* Here you can add other languages */
		default:
			TEXTS = EN_TEXTS;
			break;
	}

	let parts = path.split('.');

	for (let i = 0; i < parts.length; i++) {
		TEXTS = TEXTS[parts[i]];

		if (!TEXTS) {
			break;
		}
	}

	return TEXTS;
}

export default getText;
