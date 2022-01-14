import React from 'react';
import './navbar.styles.css';

const Navbar = (props) => {
    return(
        <nav className= "nav">
            <ul>
                {props.isLoggedIn && (
                    <li>
                    <a href="/">Users</a>
                    </li>
                )}
                {props.isLoggedIn && (
                    <li>
                    <a href="/">Admin</a>
                    </li>
                )}
                {props.isLoggedIn && (
                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    )
};
export default Navbar;