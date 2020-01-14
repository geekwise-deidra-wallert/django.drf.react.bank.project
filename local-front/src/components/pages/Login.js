import React, { Component } from 'react'
import { login } from '../../actions/authActions';
import { Redirect } from 'react-router-dom';
import {AuthContext} from '../../context/AuthProvider'
// import axios from 'axios';

export class Login extends Component {

    static contextType = AuthContext

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
        console.log('LOOK HERE FORM SUBMIT: ' + this.state.username + ' ' + this.state.password)
        login(this.state.username, this.state.password, this.context.dispatch);
        this.setState({username: ''});
        this.setState({password: ''});
    }

    // login (username, password){

    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }

    //     const body = JSON.stringify({username, password});
    //     console.log(body, "ITS A BODY");

    //     axios
    //         .post('https://bank-backend-deidra.herokuapp.com/users/api/auth/login',body, config)
    //         .then(response => {
                
    //         })
    // }

    // onSubmit = event =>{

    //     event.preventDefault();
    //     // this.props.login
    //     console.log(this.state.username,this.state.password, "IT WORKED");

    //     this.login(this.state.username, this.state.password);
    // }

    // onChange = event =>{
        
    //     this.setState({[event.target.name]: event.target.value});
    // }

    // render(state, context) {

    //     const self = this
    //     console.log(`state: ${state}`)
    //     console.log(`context: ${context}`)
    //     console.log(`this: ${this}`)

    //     console.log(this)
    //     return(
    //         true    
    //     )
    // }

    
    render() {

        
        console.log ( this )

        // this.context = {
        //     auth : {
        //         isAuthenticated : false,
        //     }
        // }

        console.log('THIS IS RENDER: ' + this.context.auth.isAuthenticated)
        if(this.context.auth.isAuthenticated){
            return <Redirect to="/" />
        }
        const { username, password} = this.state;
        
        return (
            <form onSubmit={this.formSubmit} className='container form-top-padding'>
                <div className='d-flex flex-column justify-content-center'>
                    <div className='row'>
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
                    <button type="submit" className="btn btn-primary col-6">Submit</button>
                </div>
            </form>
        )
    }
    
}

export default Login
