import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Navigasi from './components/Navigasi'
import  CarouselSlider  from './components/CarouselSlider';
import Vision from './components/Vision'
import Banner from './components/Banner';
import BannerAboutUs from './components/BannerAboutUs';
import BannerBlog from './components/BannerBlog';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      
      <Router>

        <Navigasi/>
        <CarouselSlider/>
        <Vision/>
        <Banner/>
        <BannerAboutUs/>
        <BannerBlog/>
      </Router>

        <Footer/>
    </div>
  );
}

export default App;
