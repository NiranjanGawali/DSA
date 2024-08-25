/*

Problem statement: You are given N floor and K eggs. You have to minimize the number of times you have to drop the eggs to find the critical floor where critical floor means the floor beyond which eggs start to break. Assumptions of the problem:

If egg breaks at ith floor then it also breaks at all greater floors.
If egg does not break at ith floor then it does not break at all lower floors.
Unbroken egg can be used again.
Note: You have to find minimum trials required to find the critical floor not the critical floor.

Example:
Input:
    4
    2
    
    Output:
    Number of trials when number of eggs is 2 and number of floors is 4: 3
*/

function eggDrop(f, e, memo = {}) {
  if (f == 0 || f == 1) {
    // if floor is 0 hence answer is 0, and there is only one floor so trials are also going to be 1
    return f;
  }

  if (e == 0) return 0; // if 0 eggs are given, so trials will be 0
  if (e == 1) return f; // if 1 egg is given so worst case maximum trials will be height of building

  let key = `${f}:${e}`;

  if (key in memo) return memo[key];

  let MIN_TRIALS = Number.MAX_SAFE_INTEGER;

  for (let k = 1; k <= f; k++) {
    let eggBrokenCase;
    let eggSafeCase;

    let eggBrokenCaseKey = `${k - 1}:${e - 1}`;
    if (eggBrokenCaseKey in memo) {
      eggBrokenCase = memo[eggBrokenCaseKey];
    } else {
      eggBrokenCase = eggDrop(k - 1, e - 1);
    }

    let eggSafeCaseKey = `${f - k}:${e}`;
    if (eggSafeCaseKey in memo) {
      eggSafeCase = memo[eggSafeCaseKey];
    } else {
      eggSafeCase = eggDrop(f - k, e);
    }

    let numberOfTrials = 1 + Math.max(eggBrokenCase, eggSafeCase); // As we finding the worst case here, hence we are taking maximum value of these two approaches
    MIN_TRIALS = Math.min(MIN_TRIALS, numberOfTrials); // Here we need to find minimum number trials in the worst case
  }

  memo[key] = MIN_TRIALS;

  return MIN_TRIALS;
}

let floors = 4;
let eggs = 2;

let result = eggDrop(floors, eggs);
console.log('Result : ', result);
