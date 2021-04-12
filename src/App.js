import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Navigasi from './components/Navigasi'
import  CarouselSlider  from './components/CarouselSlider';
import Vision from './components/Vision'
import Banner from './components/Banner';
import BannerAboutUs from './components/BannerAboutUs';
import BannerBlog from './components/BannerBlog';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Service from './pages/Service';


function App() {
  return (
    <div className="App">

{/*       
      <Router>

        <Navigasi/>
        <CarouselSlider/>
        <Vision/>
        <Banner/>
        <BannerAboutUs/>
        <BannerBlog/>
      </Router>

        <Footer/> */}

       
        <Service/>

    </div>
  );
}

export default App;
