import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Exercises from './components/Exercises.component';
import CreateExercises from './components/CreateExercises.component';
import Navbar from "./components/NavBar"
import Createusers from "./components/Createusers.component";
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Exercises />} />
        {/* <Route path="/edit/:id" element={<EditExercises />} /> */}
        <Route path="/create" element={<CreateExercises />} />
        {<Route path="/user" element={<Createusers />} /> }
        </Routes>
      </Router>
    </>
  );
}

export default App;