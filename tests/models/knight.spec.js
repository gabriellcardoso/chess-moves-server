const Knight = require('../../src/models/knight');
const { expect } = require('chai');

describe('Given a Knight model', () => {

    beforeEach(() => {
        this.knight = new Knight({ x: 1, y: 5 });
    });

    describe('when creating a instance', () => {
        it('should have knight position', () => {
            expect(this.knight.position).to.eql({ x: 1, y: 5 });
        });
    });

    describe('when getting moves for position', () => {
        it('should return all possible moves for position', () => {
            expect(this.knight._getMovesForPosition(1, 5)).to.eql([
                { x: 3, y: 6 },
                { x: 3, y: 4 },
                { x: 2, y: 7 },
                { x: 2, y: 3 },
            ]);
        });
    });

    describe('when getting moves', () => {
        it('should return all possible moves in two turns', () => {
            expect(this.knight.getMoves()).to.eql([
                { x: 5, y: 7 },
                { x: 5, y: 5 },
                { x: 1, y: 7 },
                { x: 1, y: 5 },
                { x: 4, y: 8 },
                { x: 2, y: 8 },
                { x: 4, y: 4 },
                { x: 2, y: 4 },
                { x: 5, y: 3 },
                { x: 1, y: 3 },
                { x: 4, y: 6 },
                { x: 2, y: 6 },
                { x: 4, y: 2 },
                { x: 2, y: 2 },
                { x: 3, y: 5 },
                { x: 3, y: 1 },
                { x: 1, y: 1 },
            ]);
        });
    });

});
