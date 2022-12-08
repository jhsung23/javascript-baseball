const { Random } = require('@woowacourse/mission-utils');
const { GAME_RULE } = require('../util/constants');

class Computer {
  #computerNumber;

  constructor() {
    this.#computerNumber = this.#generateNumber();
  }

  #generateNumber() {
    const computer = [];
    while (computer.length < GAME_RULE.GOAL) {
      const number = Random.pickNumberInRange(GAME_RULE.MIN_NUMBER, GAME_RULE.MAX_NUMBER);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  getComputerNumber() {
    return this.#computerNumber;
  }
}

module.exports = Computer;
