const server = require('./server');

const PORT = process.env.PORT || 4050;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
