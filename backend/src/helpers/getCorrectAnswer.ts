async function getCorrectAnswer(uuid: any, question: any) {
	const url = 'https://kahoot.it/rest/kahoots/' + uuid;
	let questionNumber = question.gameBlockIndex;
	let correctAnswer;

	try {
		const response = await fetch(url);

		if (response.ok) {
			const result = await response.json();

			const correctAnswers = result.questions.map((question: any) => {
				return question.choices.findIndex((choice: any) => choice.correct == true);
			});

			correctAnswer = correctAnswers[questionNumber];
		} else {
			console.log(response.status);
		}
	} catch (error) {
		console.log(error);
	}

	let randomSleepTime = Math.round(Math.random() * 4500 + 500); // During 5 seconds
	await new Promise((resolve) => setTimeout(resolve, randomSleepTime));

	return correctAnswer;
}

export default getCorrectAnswer;
