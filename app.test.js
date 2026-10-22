const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('./app');

test('greet returns a greeting', () => {
  assert.strictEqual(greet('Asha'), 'Hello, Asha!');
});
