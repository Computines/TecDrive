import Header from './components/Header';
import LandingPage from './components/LandingPage';
import { Route } from "wouter";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={LandingPage} />
    </div>
  );
}

export default App;
