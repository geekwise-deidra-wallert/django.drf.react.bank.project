import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthProvider'


function Header(){
    const { auth } = useContext(AuthContext)

    if(auth.isAuthenticated) {
        console.log('User that logged in: ' + auth.user.username)
    }

    const guestLinks = (
        <div className='col-4'>
        <Link to='login' className='login-register col-1'>Login</Link>
        <Link to='register' className='login-register col-1'>Register</Link>
        </div>
    )

    const userLinks = (
        <div className='col-4'>
            {auth.isAuthenticated ? auth.user.username: null}
        </div>
    )

    return(
        <header className='headerStyle'>
            <div className='row d-flex justify-content-end'>
                {auth.isAuthenticated ? userLinks : guestLinks}
            </div>

            <Link to='/'><h2 style={{color: '#fff'}}>Banking Company</h2></Link>

            <div className='row'>
                <Link to='branches' className='linkStyle col-2'>Branches</Link>
                <Link to='clients' className='linkStyle col-2'>Clients</Link>
            </div>
        </header>
    )
}
export default Header;