function DonateButton() {
	const URL = 'https://www.paypal.com/donate/?hosted_button_id=L5HQUVC3Q68T4';

	let openLink = () => {
		window.open(URL, '_blank');
	};

	return (
		<>
			<button className="btn btn-outline m-[8px] small-font" onClick={openLink}>
				DONATE
			</button>
		</>
	);
}

export default DonateButton;
