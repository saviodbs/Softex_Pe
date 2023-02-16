const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo ao meu web service!' });
});
app.post('/data', (req, res) => {
  const data = req.body;
  res.json(data);
});
app.listen(3000, () => {
  console.log('O servidor está rodando na porta 3000');
});
