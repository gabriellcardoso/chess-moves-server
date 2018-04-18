const expect = require('chai').expect;
const PositionUtils = require('../../src/utils/position');

describe('Given a PositionUtils', () => {
    
    describe('transforming notation to position', () => {
        const message = 'The piece position should be in algebric notation. Example: A1, B2, ..., H8.';
        
        describe('and notation is a valid', () => {
            it('should return the correct position', () => {
                expect(PositionUtils.toPosition('A1')).to.eql({ x: 1, y: 1 });
            });
        });
        describe('and notation is not a string', () => {
            it('should throw an error message', () => {
                expect(() => PositionUtils.toPosition(0)).to.throw(message);
            });
        });
        describe('and notation doesnt have only one characters', () => {
            it('should throw an error message', () => {
                expect(() => PositionUtils.toPosition('A')).to.throw(message);
            });
        });
        describe('and notation have more than two characters', () => {
            it('should throw an error message', () => {
                expect(() => PositionUtils.toPosition('A12')).to.throw(message);
            });
        });
        describe('and notation is not valid', () => {
            it('should throw an error message', () => {
                expect(() => PositionUtils.toPosition('A0')).to.throw(message);
            });
        });
    });
    
    describe('when getting X from notation', () => {
        const suite = [
            {notation: 'A2', expected: 1},
            {notation: 'B1', expected: 2},
            {notation: 'C4', expected: 3},
            {notation: 'D3', expected: 4},
            {notation: 'E6', expected: 5},
            {notation: 'F5', expected: 6},
            {notation: 'G8', expected: 7},
            {notation: 'H7', expected: 8}
        ]
        
        suite.map(item => {
            describe(`and notation is ${item.notation}`, () => {
                it(`should return ${item.expected}`, () => {
                    expect(PositionUtils.getX(item.notation)).to.eql(item.expected);
                });
            }); 
        });
    });
    
    describe('when getting Y from notation', () => {
        const suite = [
            {notation: 'B1', expected: 1},
            {notation: 'A2', expected: 2},
            {notation: 'D3', expected: 3},
            {notation: 'C4', expected: 4},
            {notation: 'F5', expected: 5},
            {notation: 'E6', expected: 6},
            {notation: 'G7', expected: 7},
            {notation: 'H8', expected: 8}
        ];
        
        suite.map(item => {
            describe(`and notation is ${item.notation}`, () => {
                it(`should return ${item.expected}`, () => {
                    expect(PositionUtils.getY(item.notation)).to.eql(item.expected);
                });
            }); 
        });
    });
    
    describe('when checking if number is inside', () => {
        describe('and number is smaller than 1', () => {
            it('should return false', () => {
                expect(PositionUtils.isInside(0)).to.be.false;
            });
        });
        describe('and number is equal to 1', () => {
            it('should return true', () => {
                expect(PositionUtils.isInside(1)).to.be.true;
            });
        });
        describe('and number is equal to 8', () => {
            it('should return true', () => {
                expect(PositionUtils.isInside(8)).to.be.true;
            });
        });
        describe('and number is bigger than 8', () => {
            it('should return false', () => {
                expect(PositionUtils.isInside(9)).to.be.false;
            });
        });
    });
    
    describe('when checking if position is inside board', () => {
        describe('and position is inside the board', () => {
            it('should return true', () => {
                expect(PositionUtils.isInsideBoard({ x: 1, y: 8 })).to.be.true;
            });
        });
        describe('and position is outside the board', () => {
            it('should return false', () => {
                expect(PositionUtils.isInsideBoard({ x: 0, y: 9 })).to.be.false;
            });
        });
    });
    
    describe('when transforming from position to notation', () => {
        it('should return the correct notation', () => {
            expect(PositionUtils.toNotation({ x: 2, y: 5 })).to.eql('B5');
        });
    });
    
});