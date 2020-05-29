import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainForm from '../components/MainForm'; 
import Board from '../components/Board';
import Home from '../components/Home';
import { connect } from "react-redux"; 
import { logoutUser } from "../actions";
import { NotificationContainer } from 'react-notifications';

class App extends PureComponent {
  
  constructor(props){
    super(props);
  }


  logoutUser = () => {
    this.props.dispatch(logoutUser());
  }

  render(){
    const { user } = this.props; 
    return (
      <div style={{color: "white"}}>
        <NotificationContainer/>
      <Router>
      {user.isAuthenticated === true ? <Redirect to="/home"> </Redirect> : <Redirect to="/"> </Redirect> }
        <Switch>
        <Route exact path="/" render={(props) => <MainForm  {...props}/>}></Route>
        <Route exact path="/home/:boardID" render={(props) => <Board  {...props} onLogout={this.logoutUser}/>}></Route>
        <Route exact path="/home" render={(props) => <Home {...props} onLogout={this.logoutUser}/>}></Route>
        </Switch>
      </Router>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user
})

export default  connect(mapStateToProps)(App); 
