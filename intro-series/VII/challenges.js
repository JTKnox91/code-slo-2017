// 1 Make a variable ‘myChar’. How do we set it to the ‘H’ in ‘Happy Birthday’? What about the ‘y’? Could we set it to the space?
var myChar;
myChar = ("Happy Birthday")[0];
myChar = ("Happy Birthday")(("Happy Birthday").length-1);
myChar = ("Happy Birthday")[5];

// 2 Break the string ‘JavaScript’ up by individual letters
("Javascript").split("");

// 3 Breaking the string ‘Always do your algorithms!’ up into the individual words
("Always do your algorithms!").split(" ");

// 4 Join the array [1,2,3,4] into a string separated by commas. Could we do asterisks instead?
([1,2,3,4]).join(",");
([1,2,3,4]).join("*");

// 5 Reverse the array [‘o’,’l’,’l’,’e’,’h’]
(["o","l","l","e","h"]).reverse();

// 6 Sort the array [‘fish’,’cabbage’,’apple’,’carrot’] alphabetically.
(["fish","cabbage","apple","carrot"]).sort();

// 7 Reverse the string “Coding is sexy”. Output should be a string! Can you do it in one line of code?
("Coding is sexy").split("").reverse().join("");
