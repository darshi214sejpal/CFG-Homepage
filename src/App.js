import './App.css';
import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar title='iNoteBook' />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}
export default App;
