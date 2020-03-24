const express = require("express");
const routes = require("./routes");

class App {
  constructor() {
    this.server = express();
  }

  middlewares() {
    this.server.use(express.json()); // Para receber requisções no formato de JSON
  }

  routes() {
    this.server.use(routes);
  }
}
