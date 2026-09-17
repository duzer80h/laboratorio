const express = require('express');
const calculadora = require('./calculadora');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    const calculo = calculadora.subtrair(4,5);
    res.send(calculo);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});