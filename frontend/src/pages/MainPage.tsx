import Navbar from '../modules/Navbar';
import DataFieldset from '../modules/DataFieldset';
import FAQ from '../modules/FAQ';
import Footer from '../modules/Footer';

function MainPage() {
	return (
		<>
			<Navbar></Navbar>
			<DataFieldset></DataFieldset>
			<FAQ></FAQ>
			<Footer></Footer>
		</>
	);
}

export default MainPage;
