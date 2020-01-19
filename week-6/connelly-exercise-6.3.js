/*
;============================================
; Title:  week 6: Exercise 6.3
; Authors: Micah Connelly
; Date: 2020 January 19
; Description: Object Literals
;===========================================
*/

/*
; Expected output:
; String of inLine object literal
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Exercise 6.3 - Header"));

// variable
var inLine;

// object
inLine = {
  name: 'Micah Connelly',
  id: '32',
  requestor: 'Thanos'
}

// Output string of object literal
console.log(`{ID: ${inLine.id}, Name: ${inLine.name}, Requestor: ${inLine.requestor}}`);

// end program
