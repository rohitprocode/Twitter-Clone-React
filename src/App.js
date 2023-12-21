import './App.css'
import MidContainer from './components/MidContainer/MidContainer';
import Navigation from "./components/Navigation/Navigation";
import ThirdContainer from './components/ThirdContainer/ThirdContainer';
// import NavListName from './components/NavList';

function App() {
  return (
    <div className="Container">
      <div className="twitter-body">
      <Navigation />
      <MidContainer/>
      <ThirdContainer/>
      </div>
      
    </div>
  );
}

export default App;
