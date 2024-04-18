import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <Link to='/sign-up' className={styles.link}> Sign Up </Link>
            <Link to='/login' className={styles.link}> Log In </Link>
        </div>
    )
}

export default Home