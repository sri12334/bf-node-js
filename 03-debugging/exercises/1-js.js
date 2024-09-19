// Syntax error
const firstName = 'John';
console.log(firstName); // lastName is not defined

// Runtime error
import http from 'http';

const PORT1 = 3000;

const server1 = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to main page</h1>
        </body>
    </html>
    `);
        res.end(); // Cannot set headers after they are sent to the client.
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to about page</h1>
        </body>
    </html>
    `);
        res.end();
    }
});

server1.listen(PORT1, () => {
    console.log(`Server is up and running at port: ${PORT1}`);
});


// Logical error
const PORT2 = 3001;
const server2 = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to about page</h1>
        </body>
    </html>
    `);
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to main page</h1>
        </body>
    </html>
    `);
    return res.end();
});

server2.listen(PORT2, () => {
    console.log(`Server is up and running at port: ${PORT2}`);
});
