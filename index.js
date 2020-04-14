const express = require("express");

const accountRouter = require('./routes/carsRouter');
const server = express();

server.use(express.json());
server.use('/cars', accountRouter);

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
 