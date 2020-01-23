import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { login } from '../../actions/auth';

export class Login extends Component {

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    
      }

    state = {
        username: '',
        password: ''
    }

    userInput = (nameText) => {
        this.setState({username: nameText.target.value});
    }

    passwordInput = (passwordText) => {
        this.setState({password: passwordText.target.value});
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password)
        this.setState({username: ''});
        this.setState({password: ''});
    }

    render() {
        
        if(this.props.isAuthenticated){
            return <Redirect to="/dashboard" />
        }
        const { username, password} = this.state;
        
        return (
            <div className="container">
                <form onSubmit={this.formSubmit} className='form-top-padding col-sm-6 offset-3'>
                    <div className='d-flex flex-column justify-content-center padding_20'>
                        <div className='row login_register_banner'>
                            <h4 className='m-auto'>Login</h4>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input value={username} onChange={this.userInput} type="text" name= "username" className="form-control" id="username" aria-describedby="usernameHelp"/>
                            {/* <small id="usernameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input value= {password} onChange={this.passwordInput} type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary col-6 align-self-center">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
    
}
const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated
  })
  
export default connect(mapStateToProps, {login})(Login);
