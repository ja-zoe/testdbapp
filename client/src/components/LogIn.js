import React from 'react';
import styles from '../styles/LogIn.module.css';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}> Log In </h1>
            <form className={styles.form}>
                <label className={styles.label}>
                    <span className={styles.span}> Username/Email </span>
                    <input type='text'></input>
                </label>
                <label className={styles.label}>
                    <span className={styles.span}> Password </span>
                    <input type='password'></input>
                </label>
                <button> Log In </button>
            </form>
            <Link to='/sign-up'> Need an Account? </Link>
            <Link to='/'> Home </Link>
        </div>
    )
}

export default LogIn