import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import '../css/Login.css';
import { register } from '../util/APIUtil';
import { connect } from "react-redux"; 

class SignUpForm extends PureComponent {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let registrationRequest = {}; 
        registrationRequest.email = this.state.email; 
        registrationRequest.password = this.state.password; 
        registrationRequest.fullName = this.state.name; 
        register(registrationRequest).then(response => {
                 console.log('registration went ...  :');
                 console.log(response);
                // TODO NOTIFICATION
            }).catch(error => {
                if (error.status === 401) {
                    // notification.error({
                    //     message: 'Error!',
                    //     description: 'Your Username or Password is incorrect. Please try again!'
                    // });
                } else {
                    // notification.error({
                    //     message: 'Error!',
                    //     description: error.message || 'Sorry! Something went wrong. Please try again!'
                    // });
                }
            });
        //console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"
                        value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"
                        value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" 
                        value={this.state.email} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agree all statements in <a href="" className="FormField__TermsLink"
                            value={this.state.hasAgreed} onChange={this.handleChange}>terms of service</a>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button>
                        <Link to="/signin" className="FormField__Link"> Already a member? </Link>
                    </div>
                </form>
                {/* {this.state.registered ? <Redirect to="/home"> </Redirect> : <div> waiting </div>} */}
            </div>)
    }
}

const mapStateToProps = state => ({
    user: state.user
  });
  
  
  export default connect(mapStateToProps)(SignUpForm);
  