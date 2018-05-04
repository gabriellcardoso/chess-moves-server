const express = require('express');
const Knight = require('../models/knight');
const PositionUtils = require('../utils/position');

const KnightController = express.Router();

KnightController.get('/:notation/moves/', getKnightMoves);

function getKnightMoves(request, response) {
    try {
        const { notation } = request.params;

        const position = PositionUtils.toPosition(notation);
        const moves = new Knight(position).getMoves();
        const notations = moves.map(move => PositionUtils.toNotation(move));

        response.status(200).send(notations);
    }
    catch (error) {
        response.status(400).send(error);
    }
}

module.exports = KnightController;
