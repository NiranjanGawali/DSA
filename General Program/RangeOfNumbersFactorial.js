function rangeOfNumbers(start, end) {
  if (start > end) {
    return [];
  } else {
    let result = rangeOfNumbers(start, end - 1);
    result.push(end);
    return result;
  }
}

console.log('Range of Numbers : ', rangeOfNumbers(1, 5));
