const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');
const { db, collection, getDocs, addDoc } = require('./firebase'); // Import Firebase config and Firestore functions

const app = express();
const port = 5000;

// Enable CORS for all routes to allow requests from other devices
app.use(cors());

// Endpoint to fetch all users from Firebase
app.get('/users', async (req, res) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersList = querySnapshot.docs.map(doc => doc.data());
        res.json(usersList);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});

// Start the Express server and listen on 0.0.0.0 for network access
app.listen(port, '0.0.0.0', () => {
    console.log(`Express server running on http://0.0.0.0:${port}`);
});

// WebSocket server setup
const wss = new WebSocket.Server({ host: '0.0.0.0', port: 8080 }); // Use 0.0.0.0 to bind to all network interfaces

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', async (message) => {
        const data = JSON.parse(message);

        if (data.type === 'newUser') {
            try {
                // Add new user to Firestore
                await addDoc(collection(db, 'users'), {
                    First_Name: data.firstName,
                    Last_Name: data.lastName,
                });
                console.log(`User ${data.firstName} ${data.lastName} added to Firebase`);

                // Broadcast update to all clients
                broadcast({ type: 'update' });
            } catch (error) {
                console.error('Error adding user to Firebase:', error);
            }
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Broadcast data to all connected clients
function broadcast(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}

console.log('WebSocket server running on ws://0.0.0.0:8080');
