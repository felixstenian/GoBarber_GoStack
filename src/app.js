const express = require("express");

class App {
  constructor() {
    this.server = express();
  }

  middlewares() {
    this.server.use(express.json()); // Para receber requisções no formato de JSON
  }

  routes() {}
}
