import sum from '../../app/arrays/sum';

test('"arrays/sum": It can add two numbers', (assert) => {
  assert.ok(sum, 'The sum function exists');

  assert.equal(sum(1, 2), 3, 'It can add 1 + 2');
  assert.equal(sum(1, 3), 4, 'It can add 1 + 3');
  assert.equal(sum(1, 4), 5, 'It can add 1 + 4');

  assert.equal(sum(2, 4), 6, 'It can add 2 + 4');
});
