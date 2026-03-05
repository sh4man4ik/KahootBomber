import getText from '../../shared/texts/texts';

function Footer() {
	return (
		<>
			<footer className="border-t border-base-300 margin-top footer sm:footer-horizontal footer-center main-content-color p-4 small-font">
				<aside>
					<p>{getText('footer.text')}</p>
				</aside>
			</footer>
		</>
	);
}

export default Footer;
