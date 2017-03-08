// Create functions like the one above for subtraction, multiplication and division.
var differenceOf = function (n,m) { return n-m; };
var productOf = function (n,m) { return n*m; };
var quotientOf = function (n,m) { return n/m; };

// Now create a function called calculator that takes a function as a parameter, along with two numbers.
// Calculator should call the parameter function, handing the two parament numbers as arguments to it.
var calculator = function (operator, n, m) {
  return operator(n,m);
};

