import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h1>NavBar Page here</h1>
            <Link to='/about-us'>About Us</Link>
            <br />
            <Link to='/listing'>List Page</Link>
        </div>
    )
}

export default NavBar;