/*
 	=================================================
 	; Title: Discussion 3.1 - Control Statements
 	; Author: Nicole Forke
 	; Date: 10 December 2019
 	; Modified By: Nicole Forke
 	; Description: Program using if/else statement
 	;================================================
 	*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Discussion 3.1"));

/*
 // output from the if/else statement
 result should show 3
*/

//start program

//variables
var x = 3;
var y = '';

//output
if (x * y == 9) {
  //changed "=" to "=="
  y = 6;
}

//Commenting out extra else statement
// else {
//   y = 8;
// }
else {
  y = 3;
}

console.log(y);

//end program
