import getText from '../../shared/texts/texts';

function Hero() {
	let handleClick = () => {
		let dataFieldset = document.getElementById('dataFieldset');

		if (dataFieldset) {
			dataFieldset.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<div className="hero bg-base-100 margin-top w-[80%] mx-auto">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="large-font font-bold">{getText('hero.title')}</h1>
						<p className="py-6 medium-font">{getText('hero.text')}</p>
						<button className="btn btn-outline small-font" onClick={handleClick}>
							{getText('hero.button')}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
