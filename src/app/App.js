import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainForm from '../pages/Login/MainForm'; 
import Board from '../components/Board';
import Home from '../components/Home';


class App extends PureComponent {

  render(){
    return (
      <div style={{color: "white"}}>
      <Router>
        <Switch>
        <Route exact path="/" component={MainForm}></Route>
        <Route path="/home/:boardID" component={Board}></Route>
        <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
