import React from 'react';
import { useState }  from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async() => {
        
    }
    return (
      <><h1>Login</h1>
      <div id="login">
        <form>
        <div>
        <input type="text" place holder="Username" value={username} onInput = {(event)=>{setUsername(event.target.value)}}/>
        <p></p>
        <input type="text" place holder="Password" value={password} onInput = {(event)=>{setPassword(event.target.value)}}/>
        <p></p>
        <button onClick={handleSubmit} type="submit">Login!</button>
        </div>
        </form>
        <p1>Register here <Link to ="/register">Register Here</Link></p1>
        </div></>          
            
    )
};

export default Login;