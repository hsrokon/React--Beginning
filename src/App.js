import {
  createBrowserRouter,
  Route,
  Router
} from "react-router-dom";

import './App.css';
import Header from './components/Header.js';
// imp default import shortcut
import NotesListPage from './pages/NotesListPage.js';
import NotePage from './pages/NotePage.js';

function App() {
  return (
    <Router>
        <div className="App">
        {/* In order to bring the imported component into our application  we've import it like this <../> */}
        <Header />
        <NotesListPage />
      </div>
    </Router>
    
  );
}

export default App;
