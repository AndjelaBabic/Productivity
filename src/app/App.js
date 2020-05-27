import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainForm from '../components/MainForm'; 
import Board from '../components/Board';
import Home from '../components/Home';
import { connect } from "react-redux"; 

class App extends PureComponent {
  
  constructor(props){
    super(props);
  }

  render(){
    const { user } = this.props; 
    return (
     
      <div style={{color: "white"}}>
       
      <Router>
      {(user && user.isAuthenticated === true) ? <Redirect to="/home"> </Redirect> : console.log('wait') }
        <Switch>
        <Route exact path="/" render={(props) => <MainForm  {...props}   />}></Route>
        <Route exact path="/home/:boardID" component={Board}></Route>
        <Route exact path="/home" component={Home}></Route>
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
