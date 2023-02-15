const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Página inicial')
})

app.get('/hello/:name', (req, res) => {
  const name = req.params.name
  res.send(`Olá, ${name}!`)
})

app.get('/square', (req, res) => {
  const number = parseInt(req.query.number)
  res.send(`O quadrado de ${number} é ${number**2}`)
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
