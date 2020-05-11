import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainForm from '../pages/Login/MainForm';
import Board from '../components/Board';


class App extends PureComponent {

  render(){
    const { lists } = this.props; 
    return (
      <Router>
        <div className="App">
        <Switch>
        <Route exact path="/" component={MainForm}></Route>
        <Route path="/list" render={() => (
          <Board lists = {lists}></Board>
          )}></Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
