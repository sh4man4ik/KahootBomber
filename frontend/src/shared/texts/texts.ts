const EN_TEXTS = {
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
