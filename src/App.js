import './App.css';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Navigasi from './components/Navigasi'
import PrivateRoute from './components/PrivateRoute'
import Contact from './pages/Contact';




function App() {
  return (
    <div id="wrap" className="App d-flex flex-column ">

      <Router>

        <Navigasi/>
        <PrivateRoute/>
        
        <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
