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
import Footer from './components/Footer';


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
          
          <Footer>  </Footer>
        </Router>
      </NoteState>
    </>
  );
}
export default App;
