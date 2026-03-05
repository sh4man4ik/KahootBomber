import getText from '../../shared/texts/texts';

function Navbar() {
	return (
		<>
			<div className="navbar bg-base-100 border-b border-base-300 flex justify-center">
				<a className="medium-font font-bold">{getText('navbar.title')}</a>
			</div>
		</>
	);
}

export default Navbar;
