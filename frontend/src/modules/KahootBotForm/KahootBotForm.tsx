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
	let [isDataSended, setIsDataSended] = useState(false);
	let [botsKey, setBotsKey] = useState(() => {
		let key = generateBotsKey();

		return key;
	});

	let url = getApiLink();

	let sendData = () => {
		if (gamePin != '' && botsNumber != '' && Number(botsNumber) >= 1 && Number(botsNumber) <= 44) {
			sendBots(url, gamePin, botsNumber, botsKey);
			setIsDataSended(true);
			// window.open('https://omg10.com/4/10743066', '_blank');
		}
	};

	let removeData = () => {
		setGamePin('');
		setBotsNumber('');
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
					sendData={sendData}
				></InputFields>
			) : (
				<ResultPanel removeData={removeData}></ResultPanel>
			)}
		</>
	);
}

export default KahootBotForm;
