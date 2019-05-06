/**
 *
 * @param fn {Function}
 */

function latestCall(fn) {
  let counter = 0;
  let currentLatestId = 0;
  return (...args) => {
    counter++;
    return new Promise(resolve => {
      fn.apply(this, args).then((value = {}) => {
        if (currentLatestId >= counter) {
          return;
        }
        value['counter'] = counter;
        resolve({});
      });
    });
  }
}


function requestMock(i) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('x:' + i);
      resolve(i);
    }, Math.floor(Math.random() * 3000));
  });
}


let latestRequest = latestCall(requestMock); //latestCall(requestMock);

function test() {
  for (let i = 0; i < 10; i++) {
    latestRequest(i).then(item => console.log(item));
  }
}

test();
