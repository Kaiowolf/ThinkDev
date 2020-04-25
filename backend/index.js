const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    evento: 'Teste do App',
    aplicativo: 'ThinkDev'
  });
});

app.listen(3333);