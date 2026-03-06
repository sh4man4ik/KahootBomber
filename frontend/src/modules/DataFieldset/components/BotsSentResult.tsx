import getText from '../../../shared/texts/texts';

function BotsSendResult(props: any) {
	return (
		<>
			<div className="flex justify-center margin-top" id="dataFieldset">
				<fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mr-[10%] ml-[10%] small-font">
					<legend className="fieldset-legend">{getText('result.legend')}</legend>

					<p className="small-font">{getText('result.text')}</p>

					<button className="btn btn-outline mt-4 small-font" onClick={props.stopBots}>
						{getText('result.button')}
					</button>
				</fieldset>
			</div>
		</>
	);
}

export default BotsSendResult;
