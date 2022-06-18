import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SingUp from './components/SingUp';
import LogIn from './components/LogIn';
import AboutUs from './components/AboutUs';
import { Route } from "wouter";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LogIn}/>
      <Route path="/singup" component={SingUp} />
      <Route path="/aboutus" component={AboutUs}/>
    </div>
  );
}

export default App;
