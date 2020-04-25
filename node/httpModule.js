const http = require('http');

// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log("New Connection");
// })

const server = http.createServer((req, resp) => {
    if(req.url=='/'){
        resp.write('Home Page');
        resp.end();
    }

    if(req.url=='/page1'){
        resp.write(JSON.stringify(['pg001', 'obj001', 'obj002']));
        resp.end();
    }
})

server.listen(1995);

console.log('Server listening on Port 1995');