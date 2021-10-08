import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Wonder from './wonderwoman';
import Card from './cards';
import Movies from './Movies';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Wonder/>
      <Movies/>
    </div>
  );
}

export default App;
