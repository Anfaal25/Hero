import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState([]);
  const [ws, setWs] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 5;

  const connectWebSocket = () => {
    try {
      const socket = new WebSocket('ws://10.13.74.200:3000');

      socket.onopen = () => {
        console.log('WebSocket connection established');
        setConnectionStatus('Connected');
        setRetryCount(0);
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'update') {
          fetchUsers();
        }
      };

      socket.onclose = (event) => {
        console.log('WebSocket connection closed', event.code, event.reason);
        setConnectionStatus('Disconnected');

        // Attempt to reconnect if not at max retries
        if (retryCount < MAX_RETRIES) {
          console.log(`Attempting to reconnect... (${retryCount + 1}/${MAX_RETRIES})`);
          setRetryCount(prev => prev + 1);
          setTimeout(() => {
            connectWebSocket();
          }, 3000); // Wait 3 seconds before trying to reconnect
        }
      };

      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
        setConnectionStatus('Error');
      };

      setWs(socket);
    } catch (error) {
      console.error('Error creating WebSocket:', error);
      setConnectionStatus('Error');
    }
  };

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []); // Empty dependency array to run only on mount

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://10.13.74.200:5000/users');
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSignUp = () => {
    if (!firstName || !lastName) {
      alert('Please fill in both first and last name');
      return;
    }

    if (ws && ws.readyState === WebSocket.OPEN) {
      const newUser = {
        type: 'newUser',
        firstName,
        lastName,
      };
      try {
        ws.send(JSON.stringify(newUser));
        setFirstName('');
        setLastName('');
      } catch (error) {
        console.error('Error sending data:', error);
        alert('Error signing up. Please try again.');
      }
    } else {
      alert('Connection to server lost. Please refresh the page.');
    }
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <div className="connection-status">
        Status: {connectionStatus}
        {connectionStatus === 'Disconnected' && retryCount < MAX_RETRIES &&
          <span> (Reconnecting...)</span>
        }
      </div>
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
        <button
          onClick={handleSignUp}
          disabled={connectionStatus !== 'Connected'}
        >
          Sign Up
        </button>
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