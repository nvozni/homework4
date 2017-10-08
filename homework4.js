//	Use recursion to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. 

const triangleStars = function(height) {
	const repeatString = function(str, num) {
		if(num <= 0) {
		   return '';
		} 
		return str + repeatString(str, num - 1);     
	};
	
	const printTriangleRows = function(height, row) {
		if(height <= 0) {
			return;
		}
		console.log(repeatString(' ', row - 1) + repeatString('*', height * 2 - 1));
		printTriangleRows(height - 1, row + 1);
	};     

	printTriangleRows(height, 1);
};

triangleStars(4);
  
 /*
	 Use recursion to create a function called pow which takes two arguments, base and n. 
	 It should than return the result of multiplying the base times itself n time (that is to say, 
	 return base to the power of n).  Example: pow(2, 3) should return 8. 
	 Remember that your function should work with any two positive integers greater than 1.
 */
 
const pow = function(base, n){
	if(n <= 0) {
		return 1; 
	}
	return base * pow(base, n - 1);
};
console.log(pow(5, 3)); 

  
/*
	Write a function that reverses a string with recursion.  Example:  reverse('abcd') should return 'dcba'.  Some things to know about strings:  
	-.length will give you the length of the string.  Example: 'abc'.length returns 3
	-You can access any character of a string using brackets: 'abcde'[2] returns 'c'.
	 Note that indexes begin with 0.  So 'abcde'[0] will return 'a'
*/
	 
const reverseString = function(string) {
	
	const reverseStringFromIndex = function(string, index) {
		if(index < 0) {
			return ''; 
		}
		return string[index] + reverseStringFromIndex(string, index - 1);
	};

	return reverseStringFromIndex(string, string.length - 1);
};
console.log(reverseString('object'));

//	Create a function called checkerboard using recursion which, given a size argument, will draw an n by n checkerboard on the screen. 

const checkerBoard = function(size) {
	const repeatString = function(string, n) {
		if(n <= 0) {
			return ''; 
		}
		return string + repeatString(string, n - 1);
	};

	const printRows = function(size, row) {
		if(row > size) {
			return;
		}
		if(row % 2 === 0) {
			console.log(repeatString(' *', size));
		}
		else {
			console.log(repeatString('* ', size)); 
		}
		printRows(size, row + 1);
	};

	printRows(size, 1);
};
  
checkerBoard(10);