const { GAME_RULE, GAME_COMMAND, ERROR } = require('../util/constants');

class Input {
  constructor(input) {
    this.validate(input);
    this.input = input;
  }

  validate(input) {
    throw new Error('This method must be implemented');
  }
}

class NumberInput extends Input {
  constructor(input) {
    super(input.trim());
    this.input = input.trim();
  }

  validate(input) {
    if (input.length !== GAME_RULE.INPUT_LENGTH) {
      throw new Error(ERROR.INVALID_LENGTH);
    }

    if (input.match(/([1-9])/g)?.length !== GAME_RULE.INPUT_LENGTH) {
      throw new Error(ERROR.INVALID_NUMBER);
    }

    if (new Set([...input]).size !== GAME_RULE.INPUT_LENGTH) {
      throw new Error(ERROR.DUPLICATED_NUMBER);
    }
  }
}

class CommandInput extends Input {
  constructor(input) {
    super(input.trim());
  }

  validate(input) {
    if (input !== GAME_COMMAND.RESTART && input !== GAME_COMMAND.QUIT) {
      throw new Error(ERROR.INVALID_COMMAND);
    }
  }
}

module.exports = { Input, NumberInput, CommandInput };
