import React from 'react';
import { useState, useEffect } from 'react';

import GeneralNavbar from './components/general-navabar/general-navbar.component';
import LoginPage from './pages/login-page/login-page.component';
import Homepage from './pages/homepage/homepage.component'



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=> {
    const storedLoginDetails = localStorage.getItem('IS_LOGGED_IN');
    if (storedLoginDetails === "1") {
      setIsLoggedIn(true);
    }
    if (storedLoginDetails === '0') {
      setIsLoggedIn(false);
    }
  }, [])


  const loginHandler = (email, password) => {
    localStorage.setItem('IS_LOGGED_IN', '1')
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem('IS_LOGGED_IN', '0')
  }

  return (
    <React.Fragment>

      <GeneralNavbar isAuthenticated = {isLoggedIn} onLogout = {logoutHandler} />

      <main>

        {!isLoggedIn && <LoginPage onLogin = {loginHandler} />}

        {isLoggedIn && <Homepage onLogout= {logoutHandler} /> }

      </main>
    </React.Fragment>
  )
};

export default App;