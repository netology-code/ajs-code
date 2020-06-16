import calculateCahsback from '../cashback';

test.each([
  ['gold', 100000, 5000],
  ['silver', 10000, 200],
  ['regular', 1000, 10],
  ['no', 500, 0],
])(('should calculate cashback for %s level with %i amount'), (level, amount, expected) => {
  const result = calculateCahsback(amount);

  expect(result).toBe(expected);
});
