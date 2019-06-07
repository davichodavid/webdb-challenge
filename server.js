const express = require("express");
const helmet = require("helmet");

const server = express();
server.use(express.json(), helmet());

const port = processs.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Hello from ${port}`);
});
