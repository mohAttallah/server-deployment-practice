# Server Deployment Practice

Deployed URL: [https://server-practice-wyyz.onrender.com/](https://server-practice-wyyz.onrender.com/)
---------------------------------------------------
## Description

This repository contains the code for a Node.js web server built using Express.js. It demonstrates the process of deploying a server using continuous integration (CI) and continuous deployment (CD). The server is set up with middleware functions for handling routes and error handling.

## Prerequisites

- Node.js
- npm
- express
- cors 
- Jest 
- supertest

## Installation

1. Clone the repository:


2. Install the dependencies:
``` npm i ```

## Usage

1. Start the server:

The server will run on the specified port (defined in the `.env` file or default to port 3000).

2. Access the server in your browser:

Open the browser and visit [http://localhost:3000/](http://localhost:3000/) to see the home page.

## Tests

To run the tests, use the following command:

## API Endpoints

### GET /

- Description: Home page endpoint
- Middleware: stamper, isAuth
- Response:
  - Status: 200 OK
  - Body:
    ```json
    {
      "code": 200,
      "message": "Welcome to the Home Page",
      "time": "<current-date-and-time>"
    }
    ```

### GET /bad

- Description: Bad request endpoint
- Middleware: None
- Response:
  - Status: 500 Internal Server Error
  - Body:
    ```json
    {
      "code": 500,
      "query": {},
      "route": "/bad",
      "body": {
        "test": "test"
      },
      "message": "SERVER ERROR NaN"
    }
    ```

### GET /items

- Description: Not found endpoint
- Middleware: None
- Response:
  - Status: 404 Not Found

## Middleware

### stamper

- Description: Middleware to add a stamper property to the request object with the current date and time.

### isAuth

- Description: Middleware for user authentication.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
