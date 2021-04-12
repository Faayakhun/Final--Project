import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Navigasi from './components/Navigasi'
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">

      
      <Router>

        <Navigasi/>
        <PrivateRoute/>
        
      </Router>

        <Footer/>
    </div>
  );
}

export default App;
