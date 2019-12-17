import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__Aside"> </div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
          </div>
          <div className="FormTitle">
            <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
            <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
          </div>
          <Route exact path="/" component={SignUpForm}>
          </Route>
          <Route path="/signin" component={SignInForm}>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
