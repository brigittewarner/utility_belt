var test      = require('tape');
var utilities = require('../utilities.js');

// Tests

test('it iterates over an array of integers and returns an array of strings using each', function (assert) {
  var arr = ['0','1'], coll = [0,1], new_coll = []

  utilities.myEach(coll, function(value) { new_coll.push(value.toString()) });

  assert.deepEqual(new_coll, arr);
  assert.end();
});

test('it iterates over an array of key value pairs and returns an array of values using each', function (assert) {
	var arr = [0,1], coll = [{"a": 0},{"b":1}], new_coll = []

  utilities.myEach(coll, function(key,value) { new_coll.push(value) })

  assert.deepEqual(new_coll, arr);
  assert.end();
});

test('it iterates over an object and returns an array of values using each', function (assert) {
	var arr = [1,2], coll = {foo: 1, bar: 2}, new_coll = []

  utilities.myEach(coll, function(key,value) { new_coll.push(value) })

  assert.deepEqual(new_coll, arr);
  assert.end();
});

test('it iterates over an array and returns an array of incremented values using map', function (assert) {
  var arr = [1,2], coll = [0,1], new_coll = [];

  var values = utilities.myMap(coll, function (value) { return value + 1 });
  assert.deepEqual(values, arr);
  assert.end();
});

test('it iterates over a collection and returns an array of values using map', function (assert) {
  var arr = [0,1], coll = [{"key": 0},{"key": 1}]

  var values = utilities.myMap(coll, function(k,v,c) { return v })
  assert.deepEqual(values, arr);
  assert.end();
});

test('it iterates over an array and returns an array of incremented values using map', function (assert) {
  var arr = [1,2], coll = [0,1], new_coll = [];

  var values = utilities.myMap(coll, function (value) { return value + 1 });
  assert.deepEqual(values, arr);
  assert.end();
});

test('it iterates over a collection and returns an array of values using map', function (assert) {
  var arr = [0,1], coll = [{"key": 0},{"key": 1}], new_coll = [];

  var values = utilities.myMap(coll, function(k,v,c) { return v })
  assert.deepEqual(values, arr);
  assert.end();
});

test('it iterates over an object and returns an array of values using map', function (assert) {
	var arr = [1,2], coll = {foo: 1, bar: 2}, new_coll = [], values

  //FIXME something is breaking in my private myFor function
  values = utilities.myMap(coll, function(v,k) { return v })

  assert.deepEqual(values, arr);
  assert.end();
});

test('it iterates over a map and returns an array of keys using map', function (assert) {
	var arr = ["a","b"], coll = new Map(), new_coll = []

  coll.set("a", 0)
  coll.set("b", 1)

  // From what I understand, neither lodash nor underscore support
  // object types that have a length property; nevertheless, an
  // an example of converting a Map() to array is provided here
  coll.forEach(function(value, key) { new_coll.push(key) })

  var values = utilities.myMap(new_coll, function(k,v) { return k })

  assert.deepEqual(values, arr);
  assert.end();
});

