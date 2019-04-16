let array = [-99, -2, -1, 0, 100, 2, 9, 87];


/**
 *
 * @param target
 * @param array
 */

function generateTwoSum(target, array) {
  let first = 0;
  let last = array.length - 1;
  while (first < last) {
    let firstValue = array[first];
    let lastValue = array[last];
    let sum = firstValue + lastValue;
    if (sum < -1 * target) {
      first = first + 1;
    } else if (sum > -1 * target) {
      last = last - 1;
    } else {
      console.log(target, firstValue, lastValue);
      first = first + 1;
      last = last - 1;
    }
  }
}

array = array.sort((a, b) => a - b);

for (let i = 0; i < array.length; i++) {
  let target = array[i];
  let restArr = array.filter((item, index) => index !== i);
  generateTwoSum(target, restArr);
}
