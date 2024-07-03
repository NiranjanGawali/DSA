//  The complexity here is 0(n)

function fib(n) {
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;

  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}

let input = 7;
let result = fib(input);
console.log(`Febonaci series till ${input} is: `, result);
