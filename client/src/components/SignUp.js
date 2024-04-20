import { React, useState } from 'react';
import styles from '../styles/SignUp.module.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [registerStatus,setRegisterStatus] = useState('');

    const register = () => {

    }

    return (
        <div className={styles.container}>
            <h1 className={styles.text}> Sign Up </h1>
            <form className={styles.form}>
                <label className={styles.label}>
                    <span className={styles.span}> Username </span>
                    <input type='text'onChange={(e) => {setUsername(e.target.value)}}/>
                </label>
                <label className={styles.label}>
                    <span className={styles.span}> Email </span>
                    <input type='email' onChange={(e) => {setEmail(e.target.value)}}/>
                </label>
                <label className={styles.label}>
                    <span className={styles.span}> Password </span>
                    <input type='password' onChange={(e) => {setPassword(e.target.value)}}/>
                </label>
                <button onClick={register}> Sign Up </button>
            </form>
            <Link to='/login' className={styles.link}> Alredy Have an Account? </Link>
            <Link to='/'> Home </Link>
        </div>
    )
}

export default SignUp