import { useState } from 'react';
import InputFields from './components/InputFields';
import ResultPanel from './components/ResultPanel';
import sendBots from './api/sendBots';
import removeBots from './api/removeBots';
import getApiLink from './helpers/getApiLink';
import generateBotsKey from './helpers/generateBotsKey';

function KahootBotForm() {
	let [gamePin, setGamePin] = useState('');
	let [botsNumber, setBotsNumber] = useState('');
	let [answerTypes, setAnswerTypes] = useState('');
	let [isDataSended, setIsDataSended] = useState(false);
	let [botsKey, setBotsKey] = useState(() => {
		let key = generateBotsKey();

		return key;
	});

	let url = getApiLink();

	let sendData = () => {
		if (
			gamePin != '' &&
			botsNumber != '' &&
			Number(botsNumber) >= 1 &&
			Number(botsNumber) <= 44 &&
			answerTypes != ''
		) {
			sendBots(url, gamePin, botsNumber, answerTypes, botsKey);
			setIsDataSended(true);
		}
	};

	let removeData = () => {
		setGamePin('');
		setBotsNumber('');
		setAnswerTypes('');
		setIsDataSended(false);
		setBotsKey(generateBotsKey());
		removeBots(url, botsKey);
	};

	return (
		<>
			{!isDataSended ? (
				<InputFields
					gamePin={gamePin}
					setGamePin={setGamePin}
					botsNumber={botsNumber}
					setBotsNumber={setBotsNumber}
					answerTypes={answerTypes}
					setAnswerTypes={setAnswerTypes}
					sendData={sendData}
				></InputFields>
			) : (
				<ResultPanel removeData={removeData}></ResultPanel>
			)}
		</>
	);
}

export default KahootBotForm;
