const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/crud-alunos', { useNewUrlParser: true, useUnifiedTopology: true });
const alunoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  curso: String,
});

const Aluno = mongoose.model('Aluno', alunoSchema);
app.use(bodyParser.json());
app.post('/alunos', async (req, res) => {
  try {
    const aluno = new Aluno(req.body);
    await aluno.save();
    res.status(201).send(aluno);
  } catch (err) {
    res.status(400).send(err);
  }
});
app.get('/alunos', async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.send(alunos);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/alunos/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) {
      return res.status(404).send('Aluno não encontrado');
    }
    res.send(aluno);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.patch('/alunos/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['nome', 'idade', 'curso'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Atualizações inválidas' });
  }

  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!aluno) {
      return res.status(404).send('Aluno não encontrado');
    }
    res.send(aluno);
  } catch (err) {
    res.status(400).send(err);
  }
});
app.delete('/alunos/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndDelete(req.params.id);
    if (!aluno) {
      return res.status(404).send('Aluno não encontrado');
    }
    res.send(aluno);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
