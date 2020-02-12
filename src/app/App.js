import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpForm from '../pages/Login/SignUpForm';
import SignInForm from '../pages/Login/SignInForm';
import './App.css';
import MainForm from '../pages/Login/MainForm';
import ToDo from '../pages/ToDo/ToDo';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path="/" component={MainForm}></Route>
      <Route path="/todo" component={ToDo}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
