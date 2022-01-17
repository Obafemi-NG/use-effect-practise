import React from 'react';
import { useState, useEffect } from 'react';

import Card from '../../components/card/card.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './login-page.styles.css';

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState();
    const [isPasswordValid, setIsPasswordValid] = useState();
    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('typed')
            setIsFormValid(password.trim().length > 6 && email.includes('@'));
        }, 300);
        return(() => {
            console.log('CLEAN_UP');
            clearTimeout(identifier);
        }) 

    }, [password, email])

    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const validateEmailHandler = () => {
        setIsEmailValid(email.includes('@'));
    };
    
    const validatePasswordHandler = () => {
        setIsPasswordValid(password.trim().length > 6);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.onLogin(email, password)
    }

    return(
        <Card  >
            <form className = 'login-container' onSubmit = {submitHandler}>
                <div className = {`control ${isEmailValid === false ? 'invalid' : '' }` } >
                    <label > Email Address </label>
                    <input
                        type="email"
                        id="email"
                        name = 'email'
                        value={email}
                        onChange={onChangeEmailHandler}
                        onBlur={validateEmailHandler}
                    />

                </div>

                <div className = {`control ${isPasswordValid === false ? 'invalid' : '' }` } >
                    <label > Password </label>
                    <input
                        type="password"
                        id="password"
                        name = 'password'
                        value= {password}
                        onChange={onChangePasswordHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className="actions">
                    <CustomButton type="submit" className= "btn" disabled={!isFormValid} onClick = {submitHandler } >
                        Login
                    </CustomButton>
                </div>
            </form>
        </Card>
    )
};
export default LoginPage;