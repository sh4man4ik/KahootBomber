import getText from '../../shared/texts/texts';
import { RiTelegram2Fill, RiDiscordFill, RiGithubFill } from '@remixicon/react';

function Footer() {
	const telegramUrl = 'https://t.me/sh4man4ikk';
	const discordUrl = 'https://discord.com/users/1263492247681237012';
	const githubUrl = 'https://github.com/sh4man4ik/KahootBomber';

	return (
		<>
			<footer className="border-t border-base-300 margin-top footer footer-horizontal footer-center p-[20px] gap-5">
				<aside>
					<p>{getText('footer.text')}</p>
				</aside>
				<nav>
					<div className="grid grid-flow-col gap-5">
						<a className="cursor-pointer" href={telegramUrl} target="_blank">
							<RiTelegram2Fill size={32} />
						</a>
						<a className="cursor-pointer" href={discordUrl} target="_blank">
							<RiDiscordFill size={32} />
						</a>
						<a className="cursor-pointer" href={githubUrl} target="_blank">
							<RiGithubFill size={32} />
						</a>
					</div>
				</nav>
			</footer>
		</>
	);
}

export default Footer;
