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
    this.input = +input.trim();
  }

  validate(input) {
    if (input.length !== 3) {
      throw new Error('길이 제한 초과');
    }

    if (!/([1-9])/g.test(input)) {
      throw new Error('유효한 숫자값이 아님');
    }

    if ([...input].some((target) => input.includes(target))) {
      throw new Error('중복된 값이 있음');
    }
  }
}

class CommandInput extends Input {
  constructor(input) {
    super(input.trim());
  }

  validate(input) {
    if (input !== '1' || input !== '2') {
      throw new Error('올바른 커맨드가 아님');
    }
  }
}
module.exports = Input;
