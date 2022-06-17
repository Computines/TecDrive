import Header from './components/Header';
import LandingPage from './components/LandingPage';
import { Route } from "wouter";
import './styles/App.css';
import Background from './components/Bacground';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={Background} />
      <Route path="/singup" component={Background} />
      <Route path="/aboutus" component={Background} />
    </div>
  );
}

export default App;
