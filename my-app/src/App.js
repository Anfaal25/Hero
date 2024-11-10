import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // WebSocket connection setup
    const socket = new WebSocket('ws://10.13.74.200:8080'); // Replace with your server's IP address and port
    setWs(socket);

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'update') {
        fetchUsers(); // Fetch updated users list on receiving update message
      }
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => socket.close();
  }, []);

  // Function to fetch users from the Express server
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/users'); // Replace with the Express server URL
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch users once on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle the "Sign Up" button click
  const handleSignUp = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const newUser = {
        type: 'newUser',
        firstName,
        lastName,
      };
      ws.send(JSON.stringify(newUser));
      setFirstName('');
      setLastName('');
    } else {
      console.log('WebSocket is not open. Unable to send data.');
    }
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
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
            {user.First_Name} {user.Last_Name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
