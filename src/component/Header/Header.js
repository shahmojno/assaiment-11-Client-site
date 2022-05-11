import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/manageitem">Manage Items</Link>
                <Link to="/additem">Add Item</Link>
                <Link to="/myitems">My items</Link>
                <Link to="/logout">Logout</Link>
            </nav>

        </div>
    );
};

export default Header;