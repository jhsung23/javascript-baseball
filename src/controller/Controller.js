const BaseballGame = require('../model/BaseballGame');
const Computer = require('../model/Computer');
const Player = require('../model/Player');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #baseballGame;

  load() {
    OutputView.printStart();
    InputView.readNumber(this.initGame.bind(this));
  }

  initGame({ input }) {
    this.#baseballGame = new BaseballGame(new Player(input), new Computer());
    this.playGame();
  }

  playGame() {
    const { ball, strike } = this.#baseballGame.play();
  }
}

module.exports = Controller;
