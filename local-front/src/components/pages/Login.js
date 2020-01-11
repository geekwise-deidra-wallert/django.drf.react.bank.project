import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <form className='container form-top-padding'>
                <div className='d-flex flex-column justify-content-center'>
                    <div className='row'>
                        <h4 className='m-auto'>Login</h4>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary col-6">Submit</button>
                </div>
            </form>
        )
    }
}

export default Login
