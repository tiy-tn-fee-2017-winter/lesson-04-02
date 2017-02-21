import sumAll from '../../app/arrays/sum-all';

test('"arrays/sum-all": It can add the sum of an array', (assert) => {
  assert.equal(sumAll([]), 0, 'It can add an empty array');
  assert.equal(sumAll([1]), 1, 'It can add 1');
  assert.equal(sumAll([2]), 2, 'It can add 2');
  assert.equal(sumAll([1, 1]), 2, 'It can add 1, 1');
});
