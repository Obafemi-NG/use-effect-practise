import React from 'react';
import { useState, useEffect, useReducer } from 'react';

import Card from '../../components/card/card.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './login-page.styles.css';



const formReducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE_INPUT_TEXT':
            return{
                ...state,
                [action.field] : action.payload,
            };
        default :
            return state;
    }
}

const initialState = {
    email : '',
    password : '',
    isEmailValid :  null ,
    isPasswordValid : null ,
}



const LoginPage = (props) => {
    // const [email, setEmail] = useState('');
    // const [password , setPassword] = useState('');
    // const [isEmailValid, setIsEmailValid] = useState();
    // const [isPasswordValid, setIsPasswordValid] = useState();
    const [isFormValid, setIsFormValid] = useState(false);


    const [formState, dispatchForm] = useReducer(formReducer, initialState);
    

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('typed')
            setIsFormValid(formState.email.includes('@') && formState.password.trim().length > 6 );
        }, 300);
        return(() => {
            console.log('CLEAN_UP');
            clearTimeout(identifier);
        }) 

    }, [formState.password, formState.email]);



    // const onChangeEmailHandler = (e) => {
    //     dispatchForm({ type : 'USER_EMAIL', email : e.target.value})
    //     // setIsFormValid(formState.isEmailValid && formState.isPasswordValid)
    // }

    // const onChangePasswordHandler = (e) => {
    //     dispatchForm({type : 'USER_PASSWORD', password : e.target.value})
    //     // setIsFormValid(formState.isPasswordValid)
    // }

    const handleTextChange = e => {
        dispatchForm({
            type : 'HANDLE_INPUT_TEXT',
            field : e.target.name,
            payload : e.target.value,
        })
    }

    const validateEmailHandler = () => {
        dispatchForm({type : 'INPUT_EMAIL_BLUR'})
    };
    
    const validatePasswordHandler = () => {
        dispatchForm({type : 'INPUT_PASSWORD_BLUR'})
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.onLogin(formState.email , formState.password)
    }

    return(
        <Card  >
            <form className = 'login-container' onSubmit = {submitHandler}>
                <div className = {`control ${formState.isValid === false ? 'invalid' : '' }` } >
                    <label > Email Address </label>
                    <input
                        type="email"
                        id="email"
                        name = 'email'
                        value={formState.email}
                        onChange={handleTextChange}
                        onBlur={validateEmailHandler}
                    />

                </div>

                <div className = {`control ${formState.isPasswordValid === false ? 'invalid' : '' }` } >
                    <label > Password </label>
                    <input
                        type="password"
                        id="password"
                        name = 'password'
                        value= {formState.password}
                        onChange={handleTextChange}
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