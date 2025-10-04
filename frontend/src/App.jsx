import './assets/styles/global.scss';
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";

const App = () => {
	return(
        <>
            <Header />
            <Slider />
            <Footer />
        </>
    )
}

export default App;