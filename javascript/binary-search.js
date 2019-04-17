let array = [-9, -3, 5, 7, 9, 10, 23, 45, 76, 88, 90];

function binarySearch(list, target, start, end) {
  let middle = Math.floor((start + end) / 2);
  if (list[middle] > target) {
    start = Math.floor((start + middle) / 2);
    return binarySearch(list, target, start, middle);
  } else if (list[middle] < target) {
    end = Math.floor((middle + end) / 2);
    return binarySearch(list, target, middle, end);
  } else {
    return middle;
  }
}


console.log(binarySearch(array, 5, 0, array.length - 1));
