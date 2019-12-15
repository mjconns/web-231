/*
============================================
; Title:  week 3: exercise 3.2
; Author: Micah Connelly
; Date:   15 December 2019
; Modified By: Micah Connelly
; Description: Exercise 3.2 - Pattern Matching Functions
;===========================================
*/

/*
  Expected output: this pattern matching test will determine if variables match or not
*/

// import
const header = require('./header.js');
console.log(header.display("Micah", "Connelly", "Exercise 3.2 - Header"));

// variables
var var1 = "Truck";
var var2 = "Car";
var var3 = 3;
var var4 = 3;
var var5 = "Bike";
var var6 = "Motorcycle";

// functions

// sets true or false based on params
function match(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

// logs mismatches
function logMismatch(x, y) {
  console.log(x + " and " + y + " do not match!");
}

// logs matches
function logMatch(x, y) {
  console.log(x + " and " + y + " do match!");
}


// checking for matches
if (match(var1, var2)) {
  logMatch(var1, var2);
} else {
  logMismatch(var1, var2)
}

if (match(var3, var4)) {
  logMatch(var3, var4);
} else {
  logMismatch(var3, var4)
}

if (match(var5, var6)) {
  logMatch(var5, var6);
} else {
  logMismatch(var5, var6)
}

// log output
console.log(match("X", "Y"), match(1, 1));

// end program
