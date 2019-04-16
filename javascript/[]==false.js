const {isArray, isString, isObject, isNumber, isUndefined, isNull, isSymbol, isFunction, isBoolean, isDate, isMath, isRegExp} = require('./isArray');

function getType(args) {
  return Object.prototype.toString.call(args);
}

function primitive(input) {

}


function equal(x, y) {

  let xType = getType(x);

  let yType = getType(y);

  if (xType === yType) {
    if (x === undefined) {
      return true;
    }

    if (x === null) {
      return true;
    }

    if (isNumber(x)) {
      if (isNaN(x)) {
        return false;
      }
      if (isNaN(y)) {
        return false;
      }

      if (x - y < Number.EPSILON) {
        return true;
      }
      if (x === +0 && y === -0) {
        return true;
      }

      if (x === -0 && y === +0) {
        return true;
      }

      return false;
    }

    if (isString(x)) {
      return x.toString() === y.toString();
    }

    if (isBoolean(x)) {
      return Boolean(x) === Boolean(y);
    }

    //  地址比较
    if (x.address === y.address) {
      return true;
    } else {
      return false;
    }
  } // end of same type


  if (isNull(x) && isUndefined(y)) {
    return true;
  }

  if (isUndefined(x) && isNull(y)) {
    return true;
  }

  if (isNumber(x) && isString(y)) {
    return x === y * 1;
  }

  if (isString(x) && isNumber(y)) {
    return x * 1 === y;
  }

  if (isBoolean(x)) {
    return x * 1 === y;
  }

  if (isBoolean(y)) {
    return x === y * 1;
  }

  if ((isString(x) || isNumber(x)) && isObject(y)) {
    return x === primitive(y);
  }

  if (isObject(x) && (isString(y) || isNumber(y))) {
    return primitive(x) === y;

  }
  return false;

}


