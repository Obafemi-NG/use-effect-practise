import React, {useEffect, useState} from 'react';

import AuthContext from './auth-context';


const AuthProvider = (props) =>{

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
        <AuthContext.Provider value = {{
            isLoggedIn : isLoggedIn,
            onLogIn : loginHandler ,
            onLogOut : logoutHandler ,
        }} >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;