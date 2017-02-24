var testArray = [1,2,3,4,5];
//make some copies to play with
var arr1 = testArray.slice(0);
var arr2 = testArray.slice(0);
var arr3 = testArray.slice(0);
var arr4 = testArray.slice(0);
var arr5 = testArray.slice(0);
var arr6 = testArray.slice(0);
var arr7 = testArray.slice(0);


/*FOR EACH EXAMPLES*/

	/* ADD 1 TO EVERYTHING WITH FOR LOOP (EDIT THE ARRAY IN PLACE)*/ 
	for (var i = 0; i < arr1.length; i++) {
		arr1[i] += 1;
	}

	/* LOG EVERTYHING IN THE ARRAY with FOR LOOP*/
	for (var i = 0; i < testArray.length; i++) {
		console.log(testArray[i]);
	}

	/*ADD 1 TO EVERYTHING WITH FOREACH*/
	var adder = function (element, index, arr) {arr[index]+=1};
	arr2.forEach(adder);
	//note the function "adder" is being passed as an argument WITHOUT being invoked (no parens)
	//this is sometimes called a "callback"

	/* LOG EVERTYHING IN THE ARRAY with FOR EACH*/
	var logger = function (element, index, array) {console.log(element)};
	//note: that logger will be invoked with 3 arguments, whether the functions uses them or not
	testArray.forEach(logger);
	
	/* ALTERNATIVE */
	testArray.forEach(console.log);
	//note: because forEach always passes all 3 arguments into its callback,
	//this will log not just each item in the array, but that items index, and the original array


/*REDUCE EXAMPLES*

	/*SUM EVERYTHING WITH FOR LOOP*/
	var sum1 = 0;
	for (var j = 0; j < arr3.length; j++) {
		sum += arr3[j];
	}

	/*SUM EVERYTHING WITH REDUCE*/
	var summer = function (currentTotal, next) {return total+next;};
	var sum2 = arr4.reduce(summer, 0);
	//again, the function "summer" is being passed as an argument WITHOUT being invoked (no parens)
	//the second argument, 0, is our "start" value. if you omit the second argument, the start value is set to the first value in the array



/*HIGHER ORDER FUNCTIONS WITH ANONYMOUS FUNCTIONS*/
//If you only plan on using the callback functions once, you can declare them inline, anonymously

	arr5.forEach(function (element, index, arr) {
		arr[index] += 1;
	});

	var sum3 = arr6.reduce(function (currentTotal, next) {
		return currentTotal + next;
	}, 0); // <don't forget the start value if you need it;
	
	//you can write this in 1 line if you want as well, its a matter of readability.
	var sum4 = arr6.reduce( function (currentTotal, next) {return currentTotal + next;}, 0);



/*
A PREAK UNDER THE HOOD:
  IF YOU REALLY WANT TO SOLIDIFY HIGHER ORDER FUNCTIONS
  I SUGGETST TRYING TO RECREATE THEM
*/


//note this has you pass in the array as an argument (the collection), rather than being called as a method of the array itself
var each = function(collection, callback) {
	for (var i = 0; i < collection.length; i++) {
		callback(collection[i], i, collection);
		//see, under the hood its a just a for loop thats repeatedly invoking our callback with arguments;
	}
};

//same thing as befofe where the array isselt is being passed as an argument (the collection)
var reduce = function(collection, callback, start) {
	var currentTotal = start;
	if (currentTotal === undefined) {currentTotal = collection.shift()}
	//.shift is like .pop but from the left side of the array. it removes an elelement and return the element that was removed.

	for (var i = 0; i < collection.length; i++) {
		currentTotal = callback(currentTotal, collection[i]);
		//again, under the hood its just a for loop
		//but you can worry about the guts of the for loop, rather than if you're iterating correctly
		//also you can save your callback function to a variable if its an operation you do ofter.
	}
	return currentTotal;
	//unlike each, this returns something instead of editing an array in place
};
