import nameOnly from '../../app/arrays/name-only';

test('"arrays/name-only": It can get the name property from an array', (assert) => {
  assert.deepEqual(nameOnly([]), []);
  assert.deepEqual(nameOnly([{ name: 'Pikachu' }]), ['Pikachu']);
  assert.deepEqual(nameOnly([{ name: 'Charizard' }]), ['Charizard']);

  assert.deepEqual(nameOnly([{ name: 'Charizard' }, { name: 'Pikachu' }]), ['Charizard', 'Pikachu']);
  assert.deepEqual(nameOnly([{ }, { name: 'Pikachu' }]), ['Pikachu']);
});
