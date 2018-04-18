const express = require('express');
const Knight = require('../models/knight');
const PositionUtils = require('../models/');

function getKnightMoves(request, response, next) { 
    try {
        const { position } = request.params;
        const moves = new Knight(position).getMoves().map(PositionUtils.toNotation);
        response.status(200).send(moves);
    }
    catch (error) {
        response.status(400).send(error);
    }
}

const controller = express.Router();

controller.get('/:position/moves/', getKnightMoves);

module.exports = controller;