const PositionUtils = require('../../src/utils/position');
const { expect } = require('chai');

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
        ];
        
        suite.map(testCase => {
            describe(`and notation is ${testCase.notation}`, () => {
                it(`should return ${testCase.expected}`, () => {
                    expect(PositionUtils.getX(testCase.notation)).to.eql(testCase.expected);
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
        
        suite.map(testCase => {
            describe(`and notation is ${testCase.notation}`, () => {
                it(`should return ${testCase.expected}`, () => {
                    expect(PositionUtils.getY(testCase.notation)).to.eql(testCase.expected);
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

    describe('when checking if positions are equals', () => {
        describe('and positions are equal', () => {
            it('should return true', () => {
                expect(PositionUtils.areEquals({x: 1, y: 1}, {x: 1, y: 1})).to.be.true;
            });
        });
        describe('and positions arent equal', () => {
            it('should return false', () => {
                expect(PositionUtils.areEquals({x: 1, y: 1}, {x: 2, y: 2})).to.be.false;
            });
        });
    });
    
    describe('when transforming from position to notation', () => {
        const suite = [
            {position: {x: 1, y: 1}, expected: 'A1'},
            {position: {x: 2, y: 2}, expected: 'B2'},
            {position: {x: 3, y: 3}, expected: 'C3'},
            {position: {x: 4, y: 4}, expected: 'D4'},
            {position: {x: 5, y: 5}, expected: 'E5'},
            {position: {x: 6, y: 6}, expected: 'F6'},
            {position: {x: 7, y: 7}, expected: 'G7'},
            {position: {x: 8, y: 8}, expected: 'H8'}
        ];

        suite.map(testCase => {
            describe(`and position (${testCase.position.x},${testCase.position.y})`, () => {
                it(`should return ${testCase.expected}`, () => {
                    expect(PositionUtils.toNotation(testCase.position)).to.eql(testCase.expected);
                });
            });
        });
    });
    
});