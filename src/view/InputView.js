const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./OutputView');
const { NumberInput, CommandInput } = require('../Input');

const InputView = {
  read(message, handler) {
    Console.readLine(message, (input) => {
      try {
        handler(input);
      } catch (error) {
        OutputView.printError(error.message);
        this.read(message, handler);
      }
    });
  },

  // TODO handler 만들기
  readNumber(handler) {
    this.read('숫자를 입력해주세요 : ', (input) => handler(new NumberInput(input)));
  },

  // TODO handler 만들기
  readCommand(handler) {
    this.read('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) =>
      handler(new CommandInput(input)),
    );
  },

  closeView() {
    Console.close();
  },
};

module.exports = InputView;
