import fs from '____';
import path, { dirname } from '____';
import { fileURLToPath } from '____';

// Construct the path
const __filename = fileURLToPath(____);
const PATH = dirname(____);

const requestHandler = (req, res) => {
    const { url, method } = req;

    if (url === '/') {
        res.setHeader('Content-Type', '____');
        res.write(
            `<html>
                <head></head>
                <body>
                    <form action="/message" method="POST">
                        <input name='message' type="text">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>`
        );
        return res.____();
    }

    if (url === '/message' && method === '____') {
        const body = [];
        // Add event data to req
        req.on('data', (chunk) => {
            body.____(chunk);
        });
        // Add event end to req
        req.on('end', () => {
            try {
                const parsedBody = Buffer.concat(body).____();
                const message = parsedBody.split('=')[____];
                if (!message) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', '____');
                    return res.end('Bad Request: Message is missing');
                } else {
                    fs.writeFile(
                        path.join(____, 'message.txt'),
                        message,
                        (err) => {
                            if (err) {
                                throw err;
                            } else {
                                // Redirect to
                                res.statusCode = 302;
                                res.setHeader('Location', '____');
                                return res.end();
                            }
                        }
                    );
                }
            } catch (err) {
                res.statusCode = ____;
                res.setHeader('Content-Type', '____');
                res.end('Internal Server Error');
            }
        });

        req.on('error', (error) => {
            console.error(____);
        });
    }
};

export default ____;
