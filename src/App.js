import {
  BrowserRouter as Router,
  Route,
  Routes
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
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
    //with this Route we specify the path and the component that should be rendered out
    // "/" means homepahe ex. 'hsrokon.com/'
    // "/note" will take me to note page
  );
}

export default App;
