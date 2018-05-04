# chess-moves-server

Chess Moves Server is a server application to provide possible moves from chess pieces. At the moment, it only knows how to calculate knight movements in the next two turns. This application has an HTTP RESTful API that can be accessed.

## Getting Started

### Prerequisites

This application uses [NodeJS] and [NPM]. You will need to have both installed in your computer before installing and running the application.

### Installing

This application uses external libraries. They are all contained in *npm packages*. So you will have to download the npm packages used in the project to install it. To download the *npm packages*, open a CLI in your application folder and run the command:

```
$ npm install
```

## Running

If everything went fine when installing the application, you can run the application now. To run the application, open the CLI in the project folder and run the command:

```
$ npm start
```

After running the command, the application will start. By default, it will start on your port `3000`. Now with the application running, you make requests to the server address ([localhost]).

## Testing

To run the application unit tests, you need to open the CLI in the project folder and run the command:

```
$ npm test
```

## HTTP RESTful API

### /knight/:annotation/moves/

- This endpoint returns all moves for the knight from a given position in two turns.
- HTTP Verb: `GET`
- Parameters
	- `:annotation`:
		- Required: `true`
		- Accepts: `A1, A2, A3, A4, A5, A6, A7, A8, B1, B2, B3, ..., H7, H8.`
- Response
	- Success
		- Status: `200`
		- Content-Type: `application/json`
		- Body: `['A1', 'A2', 'A5', 'B6']`
	- Bad Request
		- Status: `400`
		- Body: `'The piece position should be in algebric notation. Example: A1, B2, ..., H8.'`

## Built With

- [Express]
- [Mocha]
- [Chai]
- [Supertest]

## Authors

- **Gabriel Cardoso** - [gabriellcardoso]

## License

This project is licensed under the MIT License - see the [LICENSE.md] file for details

[NodeJS]: https://nodejs.org/en/
[NPM]: https://www.npmjs.com/
[localhost]: http://localhost:3000
[Express]: http://expressjs.com/
[Mocha]: https://mochajs.org/
[Chai]: http://www.chaijs.com/
[Supertest]: https://github.com/visionmedia/supertest
[gabriellcardoso]: https://github.com/gabriellcardoso
[LICENSE.md]: LICENSE.md
