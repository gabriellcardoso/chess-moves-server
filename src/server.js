const express = require('express');
const config = require('./config');
const KnightController = require('./controllers/knight');

const app = express();

app.use('/knight', KnightController);
app.listen(config.port, logStart);

function logStart() {
    console.log(`Listen on port: ${config.port}`);
}