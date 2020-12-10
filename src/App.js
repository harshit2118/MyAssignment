import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import EmployeeList from "./Components/EmployeeList";
import AddEmployee from "./Components/AddEmployee";
import About from "./Components/About";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/addemployee" component={AddEmployee}/>
              <Route exact path="/employee" component={EmployeeList}/>
              <Route exact path="/about/:id" component={About}/>
              
            </Switch>
            <br/><br/><br/><br/>
            <NavBar/>

       </div>
    </Router>
   
  );
}

export default App;
