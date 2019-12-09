/*
============================================
; Title:  week 2: assignment 2.4
; Author: Micah Connelly
; Date:   8 December 2019
; Modified By: Micah Connelly
; Description: functions with and without parameters, display content
;===========================================
*/

/*
  Expected output: full name, assignment, date, sentence with age, savings goal
*/

// import
const header = require('./header.js');
console.log(header.display("Micah", "Connelly", "Exercise 2.2 - Header"));

// function properties
var greeting = "Hello my name is";
var punctuation = "!";
var fullname = fullName("Micah", "Connelly");
let today = new Date(2019, 12, 8);
age = 31;
savings = 10000;
let temp = 33.6;
let n = 1;

// functions
function fullName(firstName, lastName){
  return firstName + " " + lastName;
}

function dateWriter() {
  return today;
}

function formatNumber(temp, n) {
  return temp.toFixed(1);
}

function convertToInt(age) {
  return parseInt(age);
}

function convertToFloat(savings) {
  return parseFloat(savings);
}

// output
console.log('\n');
console.log(greeting + " " + fullname + punctuation )
console.log("Today's date is " + dateWriter() + " and the current temperature is " + formatNumber(temp, n) + ". ");
console.log("I am " + convertToInt(age) + " years old and my savings account goal is $" + convertToFloat(savings) + " dollars.");


// end program
