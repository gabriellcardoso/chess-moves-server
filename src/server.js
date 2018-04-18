const express = require('express');
const config = require('config');
const knightController = require('./controllers/knight');

const app = express();

app.use('/knight', knightController);

app.listen(config.port, () => console.log(`Listen on port: ${port}`));
