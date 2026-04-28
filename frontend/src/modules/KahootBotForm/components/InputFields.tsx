import { RiInformationLine } from '@remixicon/react';
import getText from '../../../shared/texts/texts';

function InputFields(props: any) {
	return (
		<>
			<div className="flex justify-center margin-top" id="dataFieldset">
				<fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mr-[10%] ml-[10%] small-font">
					<legend className="fieldset-legend">{getText('fieldset.legend')}</legend>

					<div>
						<label className="label pb-[5px]">{getText('fieldset.gamePin.label')}</label>
						<input
							type="number"
							className="input validator small-font outline-none"
							required
							placeholder={getText('fieldset.gamePin.placeholder')}
							value={props.gamePin}
							onChange={(event) => props.setGamePin(event.target.value)}
						/>
						<p className="validator-hint">{getText('fieldset.gamePin.validatorHint')}</p>
					</div>

					<div>
						<label className="label pb-[5px]">{getText('fieldset.botsNumber.label')}</label>
						<input
							type="number"
							className="input validator small-font outline-none"
							required
							placeholder={getText('fieldset.botsNumber.placeholder')}
							min="1"
							max="44"
							value={props.botsNumber}
							onChange={(event) => props.setBotsNumber(event.target.value.replace(/^0+/, ''))}
						/>
						<p className="validator-hint">{getText('fieldset.botsNumber.validatorHint')}</p>
					</div>

					<div>
						<div className="flex">
							<label className="label pb-[5px]">{getText('fieldset.answerTypes.label')}</label>

							<div className="tooltip pl-[5px] pt-[1px]" data-tip={getText('fieldset.tooltip')}>
								<RiInformationLine size={16} />
							</div>
						</div>
						<select
							defaultValue=""
							onChange={(event) => props.setAnswerTypes(event.target.value)}
							className="select validator small-font outline-none"
						>
							<option value={''} disabled={true}>
								{getText('fieldset.answerTypes.options.pick')}
							</option>
							<option value={'random'}>{getText('fieldset.answerTypes.options.random')}</option>
							<option value={'correct'}>{getText('fieldset.answerTypes.options.correct')}</option>
						</select>
					</div>

					<button className="btn btn-outline mt-4 small-font" onClick={props.sendData}>
						{getText('fieldset.button')}
					</button>
				</fieldset>
			</div>
		</>
	);
}

export default InputFields;
