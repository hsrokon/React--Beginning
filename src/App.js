import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      {/* In order to bring the imported component into our application  we've import it like this <../> */}
      <Header/>
    </div>
  );
}

export default App;
