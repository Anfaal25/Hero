import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";  // Correct path to register.css in the styles folder

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (firstName && lastName && email && password && location) {
      // Dummy register logic (replace with real registration logic)
      alert("Registration successful!");
      navigate("/login"); // Redirect to login after registration
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <input 
        type="text" 
        placeholder="First Name" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
      />
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
      <input 
        type="text" 
        placeholder="Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button onClick={handleRegister}>Sign Up</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Register;
