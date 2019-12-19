/*
============================================
; Title:  week 4: exercise 4.2
; Authors: Micah Connelly
; Date:   19 December 2019
; Modified By: Micah Connelly
; Description: Call a function, pass in array, loop object
;===========================================
*/

/*
; Expected output:
; The fruit array will be passed into the function and then be looped through to display the five pieces of fruit
; 
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Exercise 4.2 - Header") + '\n');

// variables
var tastyFavorites = ["banana", "peach", "mandarins", "blueberry", "raspberry"];
var l = tastyFavorites.length;

// functions

//function passing in array to itirate through and display fruit 
function getFruit(x) {
  for (var i = 0; i < l; i++) {
    console.log(x[i]);
  }
}

// output calling function and passing in fruit array
getFruit(tastyFavorites);

// end program
