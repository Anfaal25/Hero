import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState([]);
  const [ws, setWs] = useState(null); // Store WebSocket connection

  useEffect(() => {
    // Connect to the WebSocket server
    const socket = new WebSocket('ws://10.13.74.200:8080'); // Updated to 8081

    setWs(socket);

    // Listen for messages from the server
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'init') {
        // Initial list of users on new connection
        setUsers(data.users);
      } else if (data.type === 'update') {
        // Updated list of users after a new one is added
        setUsers(data.users);
      }
    };

    // Cleanup on component unmount
    return () => socket.close();
  }, []);

  // Function to handle the "Sign Up" button click
  const handleSignUp = () => {
    if (ws && firstName && lastName) {
      const newUser = {
        type: 'newUser',
        firstName,
        lastName,
      };
      ws.send(JSON.stringify(newUser));
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div className="App">
      <h1>Hello World</h1>

      <div className="form">
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
        <button onClick={handleSignUp}>Sign Up</button>
      </div>

      <h2>All Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
