const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = '3000';

const server = http.createServer((req,res) => {
    fs.readFile("." + req.url,(err,data) => {
        if(data) {
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } else {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end();
        }
    });
 
});

server.listen(port,hostname,() => {
    console.log(`Server running on http://${hostname}:${port}`);
});