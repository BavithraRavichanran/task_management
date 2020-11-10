import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav className='nav'>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to='/user'>
                    <li>User</li>
                </Link>
                
                <Link style={navStyle} to='/tasktracker'>
                    <li >Task Tracker</li></Link>
            </ul>
        </nav>
    )
}
export default Nav;