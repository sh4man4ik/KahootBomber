import { useState } from 'react';
import Fieldset from './components/Fieldset';
import BotsSendResult from './components/BotsSentResult';
import sendBots from './api/sendBots';
import turnOffBots from './api/turnOffBots';
import getApiLink from './helpers/getApiLink';

function DataFieldset() {
	let [gamePin, setGamePin] = useState('');
	let [botsNumber, setBotsNumber] = useState('');
	const [isDataSended, setIsDataSended] = useState(false);

	let url = getApiLink();

	let sendData = () => {
		if (gamePin != '' && botsNumber != '' && Number(botsNumber) >= 1 && Number(botsNumber) <= 44) {
			sendBots(url, gamePin, botsNumber);
			setIsDataSended(true);
		}
	};

	let stopBots = () => {
		turnOffBots(url);
		setIsDataSended(false);
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
				<BotsSendResult stopBots={stopBots}></BotsSendResult>
			)}
		</>
	);
}

export default DataFieldset;
