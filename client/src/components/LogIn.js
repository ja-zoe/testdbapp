import React from 'react';
import styles from '../styles/LogIn.module.css';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='container'>
            <h1> Log In </h1>
            <form>
                <label>
                    <span> Username/Email </span>
                    <input type='text'></input>
                </label>
                <label>
                    <span> Password </span>
                    <input type='password'></input>
                </label>
            </form>
            <Link to='/sign-up'> Need an Account? </Link>
            <Link to='/'> Home </Link>
        </div>
    )
}

export default LogIn