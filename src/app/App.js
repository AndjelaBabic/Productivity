import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainForm from '../pages/Login/MainForm';
import Board from '../pages/ToDo/Board';
import List from '../components/List';
import { connect } from "react-redux";

class App extends React.Component {

  render(){
    const { lists } = this.props; 
    return (
      <Router>
        <div className="App">
        <Switch>
        <Route exact path="/" component={MainForm}></Route>
        <Route path="/todo" component={Board}></Route>
        <Route path="/list" render={() => (lists.map(list => <List title={list.title} cards={list.cards}></List>))}></Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists 
})

export default connect(mapStateToProps) (App);
