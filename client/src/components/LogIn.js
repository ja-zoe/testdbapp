import { React, useState } from 'react';
import styles from '../styles/LogIn.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const [loginStatus,setLoginStatus] = useState('')
    
    const logIn = () => {
        axios.post('http://localhost:3003/login',{
            username: username,
            password: password
        }).then((response) => {

            if(response.data.message){
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].username)
            }
            
        })
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

            <h1 className={styles.loginStatus}>{loginStatus}</h1>
        </div>
    )
}

export default LogIn