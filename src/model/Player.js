class Player {
  #playerNumber;

  constructor(input) {
    this.#playerNumber = input.split('').map(Number);
  }

  setPlayerNumber(number) {
    this.#playerNumber = number.split('').map(Number);
  }

  getPlayerNumber() {
    return this.#playerNumber;
  }
}

module.exports = Player;
