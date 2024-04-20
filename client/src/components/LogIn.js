import { React, useState } from 'react';
import styles from '../styles/LogIn.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const logIn = () => {

    }

    return (
        <div className={styles.container}>
            <h1 className={styles.text}> Log In </h1>
            <form className={styles.form}>
                <label className={styles.label}>
                    <span className={styles.span}> Username/Email </span>
                    <input type='text' onChange={(e) => {setUsername(e.target.value)}}/>
                </label>
                <label className={styles.label}>
                    <span className={styles.span}> Password </span>
                    <input type='password' onChange={(e) => {setPassword(e.target.value)}}/>
                </label>
                <button onClick={logIn}> Log In </button>
            </form>
            <Link to='/sign-up'> Need an Account? </Link>
            <Link to='/'> Home </Link>
        </div>
    )
}

export default LogIn