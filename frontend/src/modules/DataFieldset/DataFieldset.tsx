import { useState } from 'react';
import getText from '../../shared/texts/texts';

function DataFieldset() {
	let [gamePin, setGamePin] = useState('');
	let [botsNumber, setBotsNumber] = useState('');

	let sendData = () => {
		if (gamePin != '' && botsNumber != '' && Number(botsNumber) >= 1 && Number(botsNumber) <= 44) {
			console.log('Game PIN: ' + gamePin);
			console.log('Bots Number: ' + botsNumber);
		}
	};

	return (
		<>
			<div className="flex justify-center margin-top" id="dataFieldset">
				<fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mr-[10%] ml-[10%] small-font">
					<legend className="fieldset-legend">{getText('fieldset.legend')}</legend>

					<div>
						<label className="label pb-[2px]">{getText('fieldset.gamePin.label')}</label>
						<input
							type="number"
							className="input validator small-font outline-none"
							required
							placeholder={getText('fieldset.gamePin.placeholder')}
							value={gamePin}
							onChange={(event) => setGamePin(event.target.value)}
						/>
						<p className="validator-hint">{getText('fieldset.gamePin.validatorHint')}</p>
					</div>

					<div>
						<label className="label pb-[2px]">{getText('fieldset.botsNumber.label')}</label>
						<input
							type="number"
							className="input validator small-font outline-none"
							required
							placeholder={getText('fieldset.botsNumber.placeholder')}
							min="1"
							max="44"
							value={botsNumber}
							onChange={(event) => setBotsNumber(event.target.value.replace(/^0+/, ''))}
						/>
						<p className="validator-hint">{getText('fieldset.botsNumber.validatorHint')}</p>
					</div>

					<button className="btn btn-outline mt-4 small-font" onClick={sendData}>
						{getText('fieldset.button')}
					</button>
				</fieldset>
			</div>
		</>
	);
}

export default DataFieldset;
