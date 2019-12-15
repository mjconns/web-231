/*
============================================
; Title:  week 3: exercise 3.3
; Author: Professor Krasso
; Date:   15 December 2019
; Modified By: Micah Connelly
; Description: Exercise 3.3 - Control Statements
;===========================================
*/

/*
  // Expected output
  The enter key was pressed
*/

// import
const header = require('./header.js');
console.log(header.display("Micah", "Connelly", "Exercise 3.3 - Header"));

// variable
var eventKeyCode = 1;


// function
switch (eventKeyCode) {
  case 1:
    console.log("The enter key was pressed.");
    break;

  case 2:
    console.log("The shift key was pressed.");
    break;

  case 3:
    console.log("The spacebar key was pressed.");
    break;

  case 4:
    console.log("The backspace / delete key was pressed.");
    break;

  default:
    console.log("Unrecognized key.")
    break;
}
