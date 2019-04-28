function fun(...args) {
  console.log(args);
  console.log(arguments);
  console.log(Array.from(arguments));
  console.log(arguments.callee)
}


fun(1, 2, 3, 4, 5, 6);

/**
 *
 * arguments 为类数组对象 Arguments 类
 *
 arguments.callee
 指向当前执行的函数。
 arguments.caller
 指向调用当前函数的函数。
 arguments.length
 指向传递给当前函数的参数数量。
 arguments[@@iterator]
 返回一个新的Array迭代器对象，该对象包含参数中每个索引的值。
 *
 *
 */


