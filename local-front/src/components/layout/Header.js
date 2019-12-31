import React from 'react'
import { Link } from 'react-router-dom';


function Header(){
    return(

        <header style={headerStyle}>
            <h1 style={{color: '#fff'}}>Banking Company</h1>
            <Link style={linkStyle} to='branches'>Branches</Link>
            <Link style={linkStyle} to='clients'>Clients</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    padding: '10px',
    fontSize: '20px',
    fontWeight: 'bold'

    
}
const headerStyle = {
    textAlign: 'center',
    padding: '20px',
    background: '#333333',
    borderBottom: '1px solid #555555'

}

export default Header;