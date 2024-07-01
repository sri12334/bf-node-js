// Syntax error
const firstName = 'John';
console.log(____); // lastName is not defined

// Runtime error
import http from '____';

const PORT1 = ____;

const server1 = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', '____');
        res.____ = 200;
        res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to main page</h1>
        </body>
    </html>
    `);

        res.____(); // Cannot set headers after they are sent to the client.
    }
    res.setHeader('Content-Type', '____');
    res.____ = 200;
    res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to about page</h1>
        </body>
    </html>
    `);
    res.____();
});

server1.listen(PORT1, () => {
    console.log(`Server is up and running at port: ${PORT1}`);
});

// Logical error
const PORT2 = ____;
const server2 = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/about') {
        res.setHeader('Content-Type', '____');
        res.____ = 200;
        res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to main page</h1>
        </body>
    </html>
    `);

        return res.____();
    }
    res.setHeader('Content-Type', '____');
    res.____ = 200;
    res.write(`
    <html>
        <head></head>
        <body>
            <h1>Welcome to about page</h1>
        </body>
    </html>
    `);
    return res.____();
});

server2.listen(PORT2, () => {
    console.log(`Server is up and running at port: ${PORT2}`);
});
