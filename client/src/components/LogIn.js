import { React, useState } from 'react';
import styles from '../styles/LogIn.module.css';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [loginStatus,setloginStatus] = useState('');

    return (
        <div className={styles.container}>
            <h1 className={styles.text}> Log In </h1>
            <form className={styles.form}>
                <label className={styles.label}>
                    <span className={styles.span}> Username/Email </span>
                    <input type='text' onChange={(e) => {setUsername(e)}}/>
                </label>
                <label className={styles.label}>
                    <span className={styles.span}> Password </span>
                    <input type='password' onChange={(e) => {setPassword(e)}}/>
                </label>
                <button> Log In </button>
            </form>
            <Link to='/sign-up'> Need an Account? </Link>
            <Link to='/'> Home </Link>
        </div>
    )
}

export default LogIn