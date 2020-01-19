/*
;============================================
; Title:  week 6: Exercise 6.2
; Authors: Krasso/BU Online
; Date: 2020 January 17
; Modified By: Micah Connelly
; Description:
;===========================================
*/

/*
; Expected output:
; Catch clause: DoNotMatch
; inally clause reached...
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Exercise 6.2 - Header"));


// variables

var x = 1;
var y = 2;
var sum = y + x;

// try/catch

try {

  if (sum !== 4) throw "DoNotMatch";
  console.log(sum);
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  console.log("Finally clause reached...");
}

//end program
