import Navbar from '../modules/Navbar';
import Hero from '../modules/Hero';
import KahootBotForm from '../modules/KahootBotForm';
import FAQ from '../modules/FAQ';
import Footer from '../modules/Footer';

function MainPage() {
	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
			<KahootBotForm></KahootBotForm>
			<FAQ></FAQ>
			<Footer></Footer>
		</>
	);
}

export default MainPage;
