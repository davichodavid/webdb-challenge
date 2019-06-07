const express = require("express");
const helmet = require("helmet");

const projectRoutes = require("./Routes/projectRoutes");
const actionRoutes = require("./Routes/actionRoutes");

const server = express();
server.use(express.json(), helmet());

server.use("/projects", projectRoutes);
server.use("/actions", actionRoutes);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Hello from ${port}`);
});
