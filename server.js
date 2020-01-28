const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('./routers/recipeRouter');
const ingredientRouter = require('./routers/ingredientRouter');

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());

server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the Recipe's Database!</h2>`);
})

server.use((req, res) => {
  res.status(400).json({
    message: "Route was not found."
  })
})

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "An internal error occurred. Please try again later."
  })
})

// Logger Function
function logger(req, res, next) {
  console.log(`${req.method} - ${req.url} - ${Date(Date.now())}`)
  next();
}

module.exports = server;