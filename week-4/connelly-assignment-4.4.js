/*
============================================
; Title:  week 4: assignment 4.4
; Authors: Micah Connelly
; Date:   22 December 2019
; Modified By: Micah Connelly
; Description: Assignment 4.4 - Predicates
;===========================================
*/

/*
; Expected output:
; Original array view
; Sorted array view
; A match to the selected string from the array
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Assignment 4.4 - Header") + '\n');

// variables

//console displays
const origArr = "-- ORIGINAL ARRAY --";
const sortArr = "-- SORTED ARRAY --";
const selArr = "-- SELECTED VALUE --";

//array object
var states = ["Alaska", "California", "Texas", "Montana", "New Mexico"];
var l = states.length;

//selected values
var selVal = "Texas";

// functions

//function comparing states
function getState(str1, str2) {
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

//funciton filtering states to selected state
function statesFilter(str1, str2) {
  state = states.filter(function (states, selVal) {
    return getState(states, str2);});
}

// output display and original array
console.log(origArr);
for (var i = 0; i < l; i++) {
  console.log(states[i]);
}

// output display and sorted array
console.log('\n' + sortArr);
for (var i = 0; i < l; i++) {
  console.log(states.sort()[i]);
}

// output selected value
console.log('\n' + selArr);
statesFilter(states, selVal);
console.log(state[0]);

// end program


