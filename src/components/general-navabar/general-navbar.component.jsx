import React from 'react';
import Navbar from '../navbar/navbar.component';
import './general-navbar.styles.css';

const GeneralNavbar = (props) => {
    return(
        <header className= 'main-header'>
            <h1>A Typical Page</h1>
            <Navbar isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
        </header>
    )
}

export default GeneralNavbar;