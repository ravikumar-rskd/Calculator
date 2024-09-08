
import './App.css';
import Casio from './components/Casio';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
       <Header/>
       <div className='grid'>
        <Casio/>
       </div>

    </div>
  );
}

export default App;
