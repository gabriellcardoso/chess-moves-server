const KnightController = require('../../src/controllers/knight');
const request = require('supertest');
const express = require('express');

describe('Given a KnightController', () => {

    const app = express();
    app.use('/knight', KnightController);

    const agent = request.agent(app);

    describe('when receiving requests to /:position/moves/', () => {
        describe('with a valid position in algebric notation', () => {
            const moves = [
                'E7', 'E5', 'A7', 'A5', 'D8', 'B8', 'D4', 'B4', 'E3',
                'A3', 'D6', 'B6', 'D2', 'B2', 'C5', 'C1', 'A1'
            ];
            it('should respond with status OK (200)', done => {
                agent
                    .get('/knight/A5/moves/')
                    .expect(200)
                    .end(done);
            });
            it('should respond with a list of possible moves for the knight in two turns', done => {
                agent
                    .get('/knight/A5/moves/')
                    .expect(moves)
                    .end(done);
            });
        });
        describe('with a invalid position', () => {
            const errorMessage = 'The piece position should be in algebric notation. Example: A1, B2, ..., H8.';
            it('should respond with status Bad Request (400)', done => {
                agent
                    .get('/knight/AA/moves/')
                    .expect(400)
                    .end(done);
            });
            it('should respond with error message', done => {
                agent
                    .get('/knight/AA/moves')
                    .expect(errorMessage)
                    .end(done);
            });
        });
    });

});
