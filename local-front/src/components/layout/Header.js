import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from '../../actions/auth';

class Header extends Component{
    
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
      };

    render(){
        const { isAuthenticated, user } = this.props.auth;
        if(isAuthenticated) {
            console.log('User that logged in: ' + this.user.username)
        }
    
        const guestLinks = (
            <div className='col-10'>
                <Link to='login' className='login-register col-1'>Login</Link>
                <Link to='register' className='login-register col-1'>Register</Link>
            </div>
        )
    
        const userLinks = (
            <div className='col-6 name_font'>
                Hello! {isAuthenticated ? user.username: null}
                <button onClick={this.props.logout} className="btn-primary btn btn-sm text-light">
                    Sign Out
                </button>
            </div>
        )
    
        return(
            <header className='headerStyle'>
                <div className='row d-flex'>
                    <div className='col-10'>
                        <Link to='/'><h3 className='col-1 name_font'>D6</h3></Link>
                    </div>
                    <div className='d-flex col-2 justify-content-end'>
                        {isAuthenticated ? userLinks : guestLinks}
                    </div>
                </div>
                <nav className="navbar justify-content-start">
                   
                   <Link to='branches' className='linkStyle col-1 offset-1'>Branches</Link>
                   <Link to='clients' className='linkStyle col-1'>Clients</Link>
          
               </nav>
            </header>
    
        )
    }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);