const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');
const { db, collection, getDocs, addDoc } = require('./firebase'); // Import Firebase config and Firestore functions

const app = express();
const port = 5000;

// Enable CORS for all routes
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

// Start the Express server
app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`);
});

// WebSocket server setup
const wss = new WebSocket.Server({ host: '10.13.74.200', port: 8080 }); // Replace with your server's IP

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

// Broadcast data to all clients
function broadcast(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}

console.log('WebSocket server running on ws://10.13.74.200:8080');
