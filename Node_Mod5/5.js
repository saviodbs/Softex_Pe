const express = require('express');
const app = express(); 

app.listen(8080, () => { console.log('Porta 8080'); });

app.get('/', (request, response) => { response.send("Requisição raiz GET");});
app.put('/', (request, response) => {response.send("Requisição raiz PUT");});
app.post('/post', (request, response) => {response.send("Requisição POST"); }); 
app.delete('/', (request, response) => {response.send("Requisição DELETE");});
