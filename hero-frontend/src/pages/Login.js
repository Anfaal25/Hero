import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";  // Correct path to login.css in the styles folder

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login logic (replace with real authentication)
    if (email && password) {
      setIsLoggedIn(true);
      navigate("/home"); // Redirect to home after successful login
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </div>
  );
}

export default Login;
