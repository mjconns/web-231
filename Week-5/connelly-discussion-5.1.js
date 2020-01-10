/*
============================================
; Title:  week 5: Discussion 5.1
; Authors: Micah Connelly
; Date:   9 January 2020
; Modified By: Micah Connelly
; Description: Creating javascript array with two (2) errors
;===========================================
*/

/*
; Expected output:
; "Weekend, yay"
; or
; "Weekday, booo"
; depending on the day of the week it's viewed
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Discussion 5.1 - Header"));


// variables
var whatDay = new ();
var date = new Date();
var dayOfWeek = date.getDay(); // detDate() sets days of week as 0-6

// function
function checkDay() {
  if (dayOfWeek == 5 || dayOfWeek == 6) {
    whatDay.set('Weekend', 'yay');
  } else {
    whatDay.set('Weekday', 'booo');
  }
}

// loop & output
checkDay()
for (var [key, value] of whatDay) {
  console.log(keyed + ', ' + value);
}

//end program
