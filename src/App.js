import './App.css'
import MidContainer from './components/MidContainer';
import Navigation from "./components/Navigation";
import ThirdContainer from './components/ThirdContainer';
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
