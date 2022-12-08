class BaseballGame {
  #player;
  #computer;

  constructor(player, computer) {
    this.#player = player;
    this.#computer = computer;
  }

  play() {
    const playerNumber = this.#player.getPlayerNumber();
    const computerNumber = this.#computer.getComputerNumber();

    const ball = this.countBall(playerNumber, computerNumber);
    const strike = this.countStrike(playerNumber, computerNumber);

    return { ball, strike };
  }

  countBall(playerNumber, computerNumber) {
    return playerNumber.reduce((ballCount, targetNumber, index) => {
      return computerNumber.includes(targetNumber) && computerNumber[index] !== targetNumber
        ? ballCount + 1
        : ballCount;
    }, 0);
  }

  countStrike(playerNumber, computerNumber) {
    return playerNumber.reduce((strikeCount, targetNumber, index) => {
      return computerNumber[index] === targetNumber ? strikeCount + 1 : strikeCount;
    }, 0);
  }
}

module.exports = BaseballGame;
