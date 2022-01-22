import {Fragment, useContext} from 'react';


import GeneralNavbar from './components/general-navabar/general-navbar.component';
import LoginPage from './pages/login-page/login-page.component';
import Homepage from './pages/homepage/homepage.component';
import AuthContext from './components/store/auth-context';



const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <Fragment >
      <GeneralNavbar 
      // isAuthenticated = {isLoggedIn} 
      onLogout = {ctx.onLogOut} />
      <main>
        {!ctx.isLoggedIn && <LoginPage />}
        {ctx.isLoggedIn && <Homepage />}
      </main>
    </Fragment>
  )
};

export default App;