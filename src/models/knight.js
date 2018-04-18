const PositionUtils = require('../utils/moves');

const directions = [
    { x:  2, y:  1 },
    { x:  2, y: -1 },
    { x: -2, y:  1 },
    { x: -2, y: -1 },
    { x:  1, y: -2 },
    { x: -1, y: -2 },
    { x:  1, y: -2 },
    { x: -1, y: -2 }
];

class Knight {

    constructor(notation) {
        this.position = PositionUtils.fromNotation(notation);
    }
    
    getMoves() {
        const firstTurnMoves = this.getMovesForPosition(this.position.x, this.position.y);
        const secondTurnMoves = [];
        
        firstTurnMoves.forEach(position => {
            const moves = this.getMovesForPosition(position.x, position.y);
            secondTurnMoves = secondTurnMoves.concat(moves);
        });
        
        return firstTurnMoves.concat(secondTurnMoves);
    }
    
    static getMovesForPosition(x, y) {
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