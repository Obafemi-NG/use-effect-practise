import React from 'react';
import { useState } from 'react';

import Card from '../../components/card/card.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './login-page.styles.css';

const LoginPage = () => {
    // const [loginDetails, setLoginDetails] = useState({
    //     email : '',
    //     password : '',
    // })
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState();
    const [isPasswordValid, setIsPasswordValid] = useState();
    const [isFormValid, setIsFormValid] = useState(false);

    // const onChangeHandler = (e) => {
    //     const {name, value} = e.target;
    //     setLoginDetails({
    //         [name] : value,
    //     })
    //     setIsFormValid(
    //         loginDetails.password.trim().length > 6 && loginDetails.email.includes('@')
            
    //     );
    // }
    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value);
        setIsFormValid(e.target.value.includes('@') && password.trim().length > 6);
    }

    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value);
        setIsFormValid(e.target.value.trim().length > 6 && email.includes('@'));
    }

    const validateEmailHandler = () => {
        setIsEmailValid(email.includes('@'));
    };
    
    const validatePasswordHandler = () => {
        setIsPasswordValid(password.trim().length > 6);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return(
        <Card  >
            <form className = 'login-container' onSubmit = {submitHandler}>
                <div className = {`control ${isEmailValid === false ? 'invailid' : '' }` } >
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

                <div className = {`control ${isPasswordValid === false ? 'invailid' : '' }` } >
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
                    <CustomButton type="submit" className= "btn" disabled={!isFormValid}>
                        Login
                    </CustomButton>
                </div>
            </form>
        </Card>
    )
};
export default LoginPage;