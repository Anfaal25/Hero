const WebSocket = require('ws');
const wss = new WebSocket.Server({ host: '10.13.74.200', port: 8080 }); // Start server on port 8080

let users = [];

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send existing users list to the new client
    ws.send(JSON.stringify({ type: 'init', users }));

    // Handle incoming messages from clients
    ws.on('message', (message) => {
        const data = JSON.parse(message);

        // Add new user and broadcast to all clients
        if (data.type === 'newUser') {
            users.push({ firstName: data.firstName, lastName: data.lastName });
            broadcast({ type: 'update', users });
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
