const express = require('express');
const app = express(); 
app.get('/get', (request, response) => {response.send(“GET”);}); 
app.post('/post', (request, response) => {response.send(“POST”);}); 
app.listen(0808, () => { console.log('Porta 0808'); });
