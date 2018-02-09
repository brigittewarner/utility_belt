// utilities.js
// ============

module.exports = {
  // Guard function for each that checks collection type
  myEach: function (collection, myFunction) {
    if (Array.isArray(collection)) {
      return myArrayEach(collection, myFunction)
    } else {
     return myMapEach(collection, myFunction)
    }
  },
  // Guard function for map that checks collection type
  myMap: function (collection, myFunction) {
    if (Array.isArray(collection)) {
      return myArrayMap(collection, myFunction)
    } else {
     return myMapMap(collection, myFunction)
    }
  }
};

// Private

function myArrayEach(array, myFunction) {
  var index = -1, length
  if (array == null) {
    length = 0
  } else {
    length = array.length
  }

  while (++index < length) {
    if (myFunction(array[index], index, array) === false) { return }
  }
  return array
}

function myMapEach(collection, myFunction) {
  var length = collection.length, iterable = Object(collection), index = -1
  if (collection == null) { return collection }
  if (!myIsArrayLike(collection)) { return myMapForOwn(collection, myFunction) }

  while (++index < length) {
    if (myFunction(iterable[index], index, iterable) === false) { return }
  }
  return collection
}

function myArrayMap(array, myFunction) {
  var index = -1, length
  if (array == null) {
    length = 0
  } else {
    length = array.length
  }
  var result = new Array(length)

  while (++index < length) {
    result[index] = myFunction(array[index], index, array)
  }
  return result
}

function myMapMap(collection, myFunction) {
  var index = -1, result
  if (myIsArrayLike(collection)) {
    result = new Array(collection.length)
  } else {
    result = []
  }

  myMapEach(collection, (value, key, collection) => {
    result[++index] = myFunction(value, key, collection)
  })
  return result
}

function myMapFor(object, myFunction) {
  var iterable = Object(object), props = myKeys(object), length, index = -1
  if (props == null) {
    object.length
  } else {
    props.length
  }

  while (length--) {
    var key = props[++index]
    if (myFunction(iterable[key], key, iterable) === false) { return }
  }
  return object
}

function myMapForOwn(object, myFunction) {
  return object && myMapFor(object, myFunction)
}

function myKeys(object) {
  if (myIsArrayLike(Object)) {
    myArrayLikeKeys(object)
  } else {
    Object.keys(Object(object))
  }
}

function myIsArrayLike(value) {
  return value != null && typeof value != 'function' && myIsLength(value.length)
}

function myIsLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}

