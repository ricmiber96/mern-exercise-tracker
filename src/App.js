import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar'
import ExercisesList from './components/Exercise-List'
import EditExercise from './components/Edit-Exercise'
import CreateExercise from './components/Create-Exercise'
import CreateUser from './components/Create-User'

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <NavBar />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
   </Router>
  );
}

export default App;
