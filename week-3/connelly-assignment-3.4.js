/*
============================================
; Title:  week 3: Assignment 3.4
; Authors: Micah Connelly, Proefessor Krasso (randomNumber())
; Date:   15 December 2019
; Modified By: Micah Connelly
; Description: Assignment 3.4
;===========================================
*/

/*
  ; Expected output:
  ; the random number generator will be loop'd through to find the matching outside variable number
  ; to the inside local variable number and log the matches and mismatches
*/

// import
const header = require('./header.js');
console.log(header.display("Micah", "Connelly", "Assignment 3.4 - Header"));

// variables
var outsideRanNum = 5;

// functions

// random number function provided by Professor Krasso
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// functions copied from 3.3

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

// for loop to run through random numbers
for (var num = 0; num < 10; num++) {
  var insideRanNum = randomNumber();
  if (match(insideRanNum, outsideRanNum)) {
    logMatch(insideRanNum, outsideRanNum);
  } else {
    logMismatch(insideRanNum, outsideRanNum);
  }
}

// end program

// log
console.log(outsideRanNum, insideRanNum);
