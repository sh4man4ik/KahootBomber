async function getRandomAnswer(question: any) {
	let numberOfChoices = question.numberOfChoices;
	let randomAnswer = Math.floor(Math.random() * numberOfChoices);

	let randomSleepTime = Math.round(Math.random() * 4500 + 500); // During 5 seconds
	await new Promise((resolve) => setTimeout(resolve, randomSleepTime));

	return randomAnswer;
}

export default getRandomAnswer;
