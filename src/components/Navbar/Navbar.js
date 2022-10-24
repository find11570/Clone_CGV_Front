import './Navbar.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-box">
                <div className="navbar-item-blank">
                    <Link className="navItem" to='/movie'>영화</Link>
                    <Link className="navItem" to='/theater'>극장</Link>
                    <Link className="navItem-ticket" to='/ticket'>예매</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;