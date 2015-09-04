
QUnit.test("Zero is invariant value for sum", function(assert) {

    var a = 0;
    var b = 10;

    var res = sum(a, b);

    assert.equal(res, 10, "Adding zero does not change the value");

});