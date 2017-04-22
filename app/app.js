'use strict';

import express from 'express';

const PORT = 2999;
const app = express();

app.get('/', (request, response) => {
  response.send('<b>Nocker</b>');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
