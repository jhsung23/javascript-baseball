const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #computerNumber;

  constructor() {
    this.#computerNumber = this.#generateNumber();
  }

  #generateNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
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
