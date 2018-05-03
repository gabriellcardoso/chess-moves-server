const PositionUtils = require('../utils/position');

const directions = [
    { x:  2, y:  1 },
    { x:  2, y: -1 },
    { x: -2, y:  1 },
    { x: -2, y: -1 },
    { x:  1, y:  2 },
    { x: -1, y:  2 },
    { x:  1, y: -2 },
    { x: -1, y: -2 }
];

class Knight {

    constructor(position) {
        this.position = position;
    }
    
    getMoves() {
        const firstTurnMoves = this._getMovesForPosition(this.position.x, this.position.y);
        let secondTurnMoves = [];
        
        firstTurnMoves.forEach(position => {
            let moves = this._getMovesForPosition(position.x, position.y);
            secondTurnMoves = secondTurnMoves.concat(moves);
        });
        
        const moves = [];
        
        secondTurnMoves.forEach(move => {
            if (!moves.some(position => PositionUtils.areEquals(move, position))) {
                moves.push(move);
            }
        });

        return moves;
    }
    
    _getMovesForPosition(x, y) {
        const moves = [];
        
        directions.forEach(direction => {
            const position = {
                x: x + direction.x,
                y: y + direction.y
            };

            if (PositionUtils.isInsideBoard(position)) {
                moves.push(position);
            }
        });

        return moves;
    }
    
}

module.exports = Knight;