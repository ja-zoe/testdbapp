import React from 'react';
import styles from '../styles/SignUp.module.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}> Sign Up </h1>
            <form className={styles.form}>
                <label className={styles.label}>
                    <span className={styles.span}> Username </span>
                    <input type='text'/>
                </label>
                <label className={styles.label}>
                    <span className={styles.span}> Email </span>
                    <input type='email'/>
                </label>
                <label className={styles.label}>
                    <span className={styles.span}> Password </span>
                    <input type='password'/>
                </label>
                <button> Sign Up </button>
            </form>
            <Link to='/login' className={styles.link}> Alredy Have an Account? </Link>
            <Link to='/'> Home </Link>
        </div>
    )
}

export default SignUp