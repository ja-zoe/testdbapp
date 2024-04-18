import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <Link to='/sign-up'> Sign Up </Link>
            <Link to='/login'> Log In </Link>
        </div>
    )
}

export default Home