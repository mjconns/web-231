/*
;============================================
; Title:  week 5: exercise 5.2
; Authors: Micah Connelly
; Date:   12 January 2020
; Modified By: Micah Connelly
; Description: a foreach function
;===========================================
*/

/*
; Expected output:
; a list of my favorite foods
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Exercise 5.2 - Header"));

// variables
var favFoods = ['Pasta', 'Pizza', 'Hamburgers', 'Burritos', 'Hotdogs'];

// loop & output
favFoods.forEach(function(favFoods) {
  console.log(favFoods);
});

// end program
