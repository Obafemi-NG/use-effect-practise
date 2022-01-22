import React, {useContext} from 'react';
import './navbar.styles.css';
import AuthContext from '../store/auth-context';

const Navbar = () => {
    const ctx = useContext(AuthContext)
    return(
        <nav className= "nav">
            <ul>
                {ctx.isLoggedIn && (
                    <li>
                    <a href="/">Users</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                    <a href="/">Admin</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <button onClick={ctx.onLogOut}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    )
};
export default Navbar;