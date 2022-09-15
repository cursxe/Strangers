import React from 'react';
import { useState } from "react";
import {API} from "../api"
import { useNavigate } from "react-router-dom";

const Register = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(username, password);
        await fetch(`${API}/users/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: username,
                password: password,
              },
            }),
          }
          );
        const info = await Response.json();
        if(!info.success) {
            setError(info.error.message);
        } else {
          setToken(info.data.token);
          localStorage.setItem("token", info.data.token);
          navigate("/profile");
        }
    
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placceholder='username'
                />
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type={"password"}
                />
                <button>Register</button>
            </form>
            <p>{error}</p>
        </div>
    );
    
};

export default Register;