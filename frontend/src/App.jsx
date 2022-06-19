import Header from './components/Header';
import Background from './components/Background';
import LandingPage from './components/LandingPage';
import SingUp from './components/SingUp';
import LogIn from './components/LogIn';
import UserPage from './components/UserPage';
import AboutUs from './components/AboutUs';
import Upload from './components/Upload';
import { Route } from "wouter";
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <Background bg/>
      <Route path="/"><Header /><LandingPage /></Route>
      <Route path="/login"><Header /><LogIn /></Route>
      <Route path="/singup"><Header /><SingUp /></Route>
      <Route path="/aboutus"><Header /><AboutUs /></Route>
      <Route path='/user/:username' ><Header user /></Route>
      <Route path='/user/:username' component={UserPage} />
      <Route path='/upload/:username' ><Header user /></Route>
      <Route path='/upload/:username' component={Upload} />
    </div>
  );
}

export default App;
