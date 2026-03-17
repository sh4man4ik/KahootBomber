import { useState } from 'react';
import Fieldset from './components/Fieldset';
import BotsSendResult from './components/BotsSentResult';
import sendBots from './api/sendBots';
import removeBots from './api/removeBots';
import getApiLink from './helpers/getApiLink';
import generateBotsKey from './helpers/generateBotsKey';

function DataFieldset() {
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
				<Fieldset
					gamePin={gamePin}
					setGamePin={setGamePin}
					botsNumber={botsNumber}
					setBotsNumber={setBotsNumber}
					sendData={sendData}
				></Fieldset>
			) : (
				<BotsSendResult removeData={removeData}></BotsSendResult>
			)}
		</>
	);
}

export default DataFieldset;
