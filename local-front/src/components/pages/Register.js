import React, { Component } from 'react'
import axios from 'axios'
import { register } from '../../actions/authActions';
import { Redirect } from 'react-router-dom';
import {AuthContext} from '../../context/AuthProvider'

export class Register extends Component {

    static contextType = AuthContext

    state = {
        username: '',
        email: '',
        password: '',
        // groups: [],
    }

    // Groups = []

    userInput = (nameText) => {
        this.setState({username: nameText.target.value});
    }

    emailInput = (emailText) => {
        this.setState({email: emailText.target.value});
    }

    passwordInput = (passwordText) => {
        this.setState({password: passwordText.target.value});
    }

    // groupInput = (groupSelect) => {
    //     this.setState({groups: groupSelect.target.value});
    // }
    
    // componentDidMount(){
    //     this.getGroups();
    // }

    // getGroups(){
    //     axios
    //         .get('https://bank-backend-deidra.herokuapp.com/users/api/auth/groups')
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error))
    // }

    // renderGroupOptions(){
    //     console.log(this.state.Groups)
    //     return this.state.Groups.map(group => (
    //     <option value={`${group.id}`}>{group.name}</option>
    //     ))
    // }

    formSubmit = (event) => {
        event.preventDefault();
        axios
            .post('https://bank-backend-deidra.herokuapp.com/users/api/auth/register', this.state)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        const {email, password, username} = this.state
        if (username === '' || password === ''){
            this.setState({message: 'Name and Password must be filled out.'})
        } else {
            this.setState({message: ''})
            const newUser = {username, email, password};
            register(newUser, this.context.dispatch);
            this.setState({username: ''});
            this.setState({email: ''});
            this.setState({password: ''});
        }
    }

    render() {
        console.log ( this )
        if(this.context.auth.isAuthenticated){
            return <Redirect to="/" />
        }
        const { username, email, password} = this.state;
        return (
            <form onSubmit={this.formSubmit} className='container form-top-padding'>
                <div className='d-flex flex-column justify-content-center'>
                    <div className='row register-banner'>
                        <h4 className='m-auto'>Register</h4>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="inputName">First Name</label>
                        <input onChange={this.userInput} value={username} type="text" className="form-control" id="InputName" aria-describedby="nameHelp"/>
                        <small id="nameHelp" className="form-text text-muted">Please input your name.</small>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.emailInput} value={email} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={this.passwordInput} value={password} type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    {/* <div>
                    <select name="groups" value={this.state.groups} onChange={this.groupInput}>
                        {this.renderGroupOptions()}
                    </select> 
                    </div> */}
                    <button type="submit" className="btn btn-primary col-3 align-self-center">Submit</button>
                </div>
            </form>
        )
    }
}

export default Register