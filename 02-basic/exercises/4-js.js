import http from 'http';

import requestHandler from './routes';

// Port
const PORT = 3000;

// Create a server
const server = http.createServer(requestHandler);

// Start the server listening on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
