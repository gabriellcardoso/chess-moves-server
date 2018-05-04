const message = 'The piece position should be in algebric notation. Example: A1, B2, ..., H8.';
const firstBase = 64;
const secondBase = 48;

class PositionUtils {

    static toPosition(notation) {
        if (typeof notation !== 'string') {
            throw message;
        }

        if (notation.length !== 2) {
            throw message;
        }

        notation = notation.toUpperCase();

        const position = {
            x: PositionUtils.getX(notation),
            y: PositionUtils.getY(notation)
        };

        if (!PositionUtils.isInsideBoard(position)) {
            throw message;
        }

        return position;
    }

    static getX(notation) {
        return notation.charCodeAt(0) - firstBase;
    }

    static getY(notation) {
        return notation.charCodeAt(1) - secondBase;
    }

    static isInsideBoard(position) {
        return PositionUtils.isInside(position.x)
            && PositionUtils.isInside(position.y);
    }

    static isInside(number) {
        return number > 0 && number < 9;
    }

    static areEquals(positionA, positionB) {
        return positionA.x === positionB.x
            && positionA.y === positionB.y;
    }

    static toNotation(position) {
        return String.fromCharCode(position.x + firstBase) + String.fromCharCode(position.y + secondBase);
    }

}

module.exports = PositionUtils;
