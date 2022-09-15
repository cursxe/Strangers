import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return(<div className="navbar">
    <h1>Stranger's Things</h1>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to ="/login">Login</Link>
        <Link to ="/profile">Profile</Link>
        <Link to ="/register">Register</Link>  
    </div>
    ); 
};

export default Navbar;