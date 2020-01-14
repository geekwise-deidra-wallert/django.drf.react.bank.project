// import React, { Component } from 'react'
// import PropTypes from 'prop-types';

// export class Register extends Component {

//     state = {
//         username: '',
//         email: '',
//         password: '',
//     }

//     static propTypes = {
//         register: PropTypes.func.isRequired,
//         isAuthenticated: PropTypes.bool
//     }

//     nameInput = (nameText) => {
//         this.setState({username: nameText.target.value});
//     }

//     emailInput = (emailText) => {
//         this.setState({email: emailText.target.value});
//     }



//     render() {
//         return (
//             <form className='container form-top-padding'>
//                 <div className='d-flex flex-column justify-content-center'>
//                     <div className='row register-banner'>
//                         <h4 className='m-auto'>Register</h4>
//                     </div>
//                     <div className="form-group col">
//                         <label htmlFor="InputName">First Name</label>
//                         <input onChange={this.nameInput} value={username} type="name" className="form-control" id="InputName" aria-describedby="nameHelp"/>
//                         <small id="nameHelp" className="form-text text-muted">Please input your name.</small>
//                     </div>
//                     <div className="form-group col">
//                         <label htmlFor="exampleInputEmail1">Email address</label>
//                         <input onChange={this.emailInput} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//                         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                     </div>
//                     <div className="form-group col">
//                         <label htmlFor="exampleInputPassword1">Password</label>
//                         <input onChange={this.passwordInput} value={password} type="password" className="form-control" id="exampleInputPassword1"/>
//                     </div>
//                     <button type="submit" className="btn btn-primary col-3 align-self-center">Submit</button>
//                 </div>
//             </form>
//         )
//     }
// }

// export default Register