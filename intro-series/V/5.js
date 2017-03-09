let sumOf = (n, m) => { return n+m; };
// Create functions like the one above for subtraction, multiplication and division.
let differenceOf = (n,m) => { return n-m; };
let productOf = (n,m) => { return n*m; };
let quotientOf = (n,m) => { return n/m; };

// Now create a function called calculator that takes a function as a parameter, along with two numbers.
// Calculator should call the parameter function, handing the two parament numbers as arguments to it.
let calculator = (operator, n, m) => {
  return operator(n,m);
};

