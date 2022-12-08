const GAME_COMMAND = Object.freeze({
  RESTART: '1',
  QUIT: '2',
});

const GAME_RULE = Object.freeze({
  GOAL: 3,
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  INPUT_LENGTH: 3,
});

const ERROR = Object.freeze({
  INVALID_LENGTH: `입력값의 길이는 ${GAME_RULE.INPUT_LENGTH}이어야 합니다.`,
  INVALID_NUMBER: `${GAME_RULE.MIN_NUMBER}부터 ${GAME_RULE.MAX_NUMBER} 사이의 숫자만 입력할 수 있습니다.`,
  DUPLICATED_NUMBER: '중복된 숫자를 입력할 수 없습니다.',
  INVALID_COMMAND: `숫자 ${GAME_COMMAND.RESTART} 또는 ${GAME_COMMAND.QUIT}만 입력할 수 있습니다.`,
});

module.exports = { GAME_COMMAND, GAME_RULE, ERROR };
