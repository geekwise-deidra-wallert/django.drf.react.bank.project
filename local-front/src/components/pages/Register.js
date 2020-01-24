import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import axios from 'axios'
import { register } from '../../actions/auth';


export class Register extends Component {

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    
      }

    state = {
        username: '',
        email: '',
        password: '',
        justRegister: false,
        justRegisterUser: false,
        groups: [1],
        groupList: [],
        groupName: ""
    }

    componentDidMount(){
        this.setState({justRegister: false});
        this.setState({justRegisterUser: false});
        this.getGroupList();
    };

    getGroupList(){
        axios
            .get("https://bank-backend-deidra.herokuapp.com/groups/")
            .then( response => {

                if (this.props.auth.user != null){
                    this.setState({ groupName: this.props.auth.user.groups[0].name});
                }
                    this.setState({ groupList:response.data});
                    console.log(this.props.auth.user)
                 
            })
            .catch(error => console.log(error))
    }

    renderGroupOptions(){
        return this.state.groupList.map(group => (
            <option key={group.id} value={group.id}>{group.name}</option>
          ));
    }

    groupChoice = event => {
        const {value} = event.target;
        this.setState({groups: [parseInt(value)]});
    };


    userInput = (nameText) => {
        this.setState({username: nameText.target.value});
    }

    emailInput = (emailText) => {
        this.setState({email: emailText.target.value});
    }

    passwordInput = (passwordText) => {
        this.setState({password: passwordText.target.value});
    }

    formSubmit = (event) => {
        event.preventDefault();
        const {email, password, username, groups} = this.state
        const newUser = {
            username,
            password,
            email,
            groups
        };
        this.props.register(newUser)
        
        // if (username === '' || password === ''){
        //     this.setState({message: 'Name and Password must be filled out.'})
        // } else {
        //     this.setState({message: ''})
        //     const newUser = {username, email, password, groups};
        //     register(newUser, this.dispatch);
        //     this.setState({username: ''});
        //     this.setState({email: ''});
        //     this.setState({password: ''});
        // }
    }

    render() {
        console.log ( this )
        if(this.isAuthenticated){
            return <Redirect to="/" />
        }
        const { username, email, password} = this.state;
        return (
            <div className="container">
                <form onSubmit={this.formSubmit} className='form-top-padding col-sm-6 offset-3'>
                    <div className='d-flex flex-column justify-content-center padding_20'>
                        <div className='row login_register_banner'>
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
                        <div className="form-group">
                            <label>Group/</label>
                            <select className="form-control" name="groups" onChange={this.groupChoice}> {this.renderGroupOptions()}
                            </select> 
                        </div>
                        <button type="submit" className="btn btn-primary col-6 align-self-center">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
    auth: state.auth
  })
  
  export default connect(mapStateToProps, {register})(Register);