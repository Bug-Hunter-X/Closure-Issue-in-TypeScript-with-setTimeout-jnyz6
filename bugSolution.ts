function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Use an IIFE to create a new scope for each iteration
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbers2(5); // This will now print 1, 2, 3, 4, 5 correctly