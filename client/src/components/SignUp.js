import React from 'react';
import styles from '../styles/SignUp.module.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='container'>
            <h1> Sign Up </h1>
            <form>
                <label>
                    <span> Username </span>
                    <input type='text'></input>
                </label>
                <label>
                    <span> Email </span>
                    <input type='email'></input>
                </label>
                <label>
                    <span> Password </span>
                    <input type='password'></input>
                </label>
            </form>
            <Link to='/login'> Alredy Have an Account? </Link>
            <Link to='/'> Home </Link>
        </div>
    )
}

export default SignUp