import './App.css'
import MidContainer from './components/MidContainer';
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="Container">
      <div className="twitter-body">
      <Navigation/>
      <MidContainer/>
      </div>
      
    </div>
  );
}

export default App;
