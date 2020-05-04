import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import MainForm from '../pages/Login/MainForm';
import Board from '../pages/ToDo/Board';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path="/" component={MainForm}></Route>
      <Route path="/todo" component={Board}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
