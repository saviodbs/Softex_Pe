const http = require('http');
const server = http.createServer((request, response) => {
 	response.writeHead(200, { 'Content-Type': 'text/plain' });
 	response.end('Hello World!'); });
server.listen(8080, () => {console.log('Porta do servidor: 8080');});
