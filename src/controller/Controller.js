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
    OutputView.printResult(ball, strike);

    if (strike === 3) {
      OutputView.printSuccess();
      InputView.readCommand(this.handleGameCommand.bind(this));
    } else {
      InputView.readNumber(this.continueGame.bind(this));
    }
  }

  continueGame({ input }) {
    this.#baseballGame.setForNextRound(input);
    this.playGame();
  }

  handleGameCommand({ input }) {
    if (input === '1') {
      InputView.readNumber(this.initGame.bind(this));
    }
    if (input === '2') {
      InputView.closeView();
    }
  }
}

module.exports = Controller;
