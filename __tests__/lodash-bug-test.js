jest.useFakeTimers();

const _ = require('lodash');

test('runs timers as expected', () => {
  const test = jest.fn();
  const debounced = _.debounce(test, 1000);

  debounced();
  debounced();

  jest.runAllTimers();

  expect(test).toHaveBeenCalledTimes(1);
});
