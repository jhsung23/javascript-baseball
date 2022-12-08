const Controller = require('./controller/Controller');

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  play() {
    this.#controller.load();
  }
}

module.exports = App;
