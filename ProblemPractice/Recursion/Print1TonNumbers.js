// Print 1 to N numbers for the given input.

function print1ToNnumbers(n) {
  if (n === 1) {
    console.log(n);
    return;
  }

  print1ToNnumbers(n - 1);
  console.log(n);
}

// print1ToNnumbers(7);

// Print N to 1 numbers for the given input.

function printNTo1numbers(n) {
  if (n === 1) {
    console.log(n);
    return;
  }

  console.log(n);
  printNTo1numbers(n - 1);
}

printNTo1numbers(7);
