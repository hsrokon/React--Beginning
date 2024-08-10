import './App.css';
import Header from './components/Header.js';
// imp default import shortcut
import NotesListPage from './pages/NotesListPage.js';

function App() {
  return (
    <div className="App">
      {/* In order to bring the imported component into our application  we've import it like this <../> */}
      <Header />
      <NotesListPage />
    </div>
  );
}

export default App;
