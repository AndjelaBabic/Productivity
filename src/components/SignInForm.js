import React from 'react';
import { Link } from "react-router-dom";
import { login } from '../util/APIUtil';
import { notification } from 'antd';
import '../css/Login.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { setUser } from '../actions/userActions';
import { connect } from "react-redux"; 


class SignInForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        // Prevent a submit button from submitting a form
        e.preventDefault();
        let loginRequest = {}; 
        loginRequest.email = this.state.email; 
        loginRequest.password = this.state.password; 
        login(loginRequest)
            .then(response => {
                console.log(response); 
                let user = {
                    email: this.state.email, 
                    password: this.state.password, 
                    isAuthenticated: true 
                }
                this.props.dispatch(setUser(user));
            }).catch(error => {
                if (error.status === 401) {
                    notification.error({
                        message: 'Error!',
                        description: 'Your Username or Password is incorrect. Please try again!'
                    });
                } else {
                    notification.error({
                        message: 'Error!',
                        description: error.message || 'Sorry! Something went wrong. Please try again!'
                    });
                }
            });
        
      
    }

    render() {
        return (
          
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"
                            value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"
                            value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button>
                        <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>)
    }
}
const mapStateToProps = state => ({
    user: state.user
  });
  
export default connect(mapStateToProps)(SignInForm);