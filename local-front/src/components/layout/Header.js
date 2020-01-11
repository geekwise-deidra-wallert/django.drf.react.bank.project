import React from 'react'
import { Link } from 'react-router-dom';


function Header(){
    return(

        <header className='headerStyle'>
            <div className='row d-flex justify-content-end'>
                <div className='col-4'>
                    <Link to='login' className='login-register col-1'>Login</Link>
                    <Link to='register' className='login-register col-1'>Register</Link>
                </div>
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