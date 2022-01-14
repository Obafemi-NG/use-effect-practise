import React from 'react';
import GeneralNavbar from './components/general-navabar/general-navbar.component';
import LoginPage from './pages/login-page/login-page.component';


const App = () => {
  return (
    <React.Fragment>
      <GeneralNavbar/>
      <LoginPage/>
    </React.Fragment>
  )
};

export default App;