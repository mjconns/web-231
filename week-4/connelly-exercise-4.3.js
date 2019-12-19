/*
============================================
; Title:  week 4: exercise 4.3
; Authors: Micah Connelly
; Date:   19 December 2019
; Modified By: Micah Connelly
; Description: Filtering values across an array
;===========================================
*/

/*
; Expected output:
; Display array
; Match selected value to value in array
; Filter out nonmatches
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Exercise 4.3 - Header") + '\n');

// variables

//console displays
const displayArr = "-- DISPLAYING ARRAY ITEMS --";
const displayVal = "-- SELECTED VALUE --";

//array object
var v = ["Toyota Tacoma", "Tesla Cyber Truck", "Ford F-150", "Dodge Ram 1500", "Chevy Silverado 1500"];
var l = v.length;

//selected values
var selVal1 = "Toyota Tacoma";
var selVal2 = "Tesla Cyber Truck";


// functions

//function comparing array, string; filtering nonmatches
function getValue(arr, str) {
  for (var i = 0; i < l; i++) {
    if (arr[i] === str) {
      console.log(arr[i]);
    }
  }
}

// output display and array
console.log(displayArr);
for (var i = 0; i < l; i++) {
  console.log(v[i]);
}

// output selected value match
console.log('\n' + displayVal);
getValue(v, selVal1);
getValue(v, selVal2);

// end program
