
import sum from 'sum.js'

QUnit.test('Zero is invariant value for sum', function(assert) {

    const a = 0;
    const b = 10;

    assert.equal(sum(a, b), 10, 'Adding zero does not change the value');

});