let array = [-99, -2, -1, 0, 100, 2, 9, 87];
array = [-99, -98, -1, 0, 1, 2, 3, 97, 98, 100];


/**
 *
 * @param target
 * @param array
 * @param dict
 */

function generateTwoSum(target, array, dict) {
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
      let current = [target, firstValue, lastValue].sort((a,b)=>a-b).join('/');
      dict[current] = true;
      first = first + 1;
      last = last - 1;
    }
  }
}

array = array.sort((a, b) => a - b);
let dict = {};
for (let i = 0; i < array.length; i++) {
  let target = array[i];
  let restArr = array.filter((item, index) => index !== i);
  generateTwoSum(target, restArr, dict);
}
console.log(Object.keys(dict).map(item=>item.split('/').map(item=>item*1)));



