import './App.css';
import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar title='iNoteBook' />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<SignUp />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}
export default App;
