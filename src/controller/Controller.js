const BaseballGame = require('../model/BaseballGame');
const Computer = require('../model/Computer');
const Player = require('../model/Player');
const { GAME_COMMAND, GAME_RULE } = require('../util/constants');
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

    if (strike === GAME_RULE.GOAL) {
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
    if (input === GAME_COMMAND.RESTART) {
      InputView.readNumber(this.initGame.bind(this));
    } else if (input === GAME_COMMAND.QUIT) {
      InputView.closeView();
    }
  }
}

module.exports = Controller;
