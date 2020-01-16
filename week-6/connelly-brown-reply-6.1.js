/*
============================================
; Title:  Discussion 6.1
; Author: James Brown
; Modified by: Micah Connelly
; Date:   1/16/2020
; Description: working with objects
;===========================================
*/

/**
    Expected output
    James is 27 years old. His year of birth is 1992.
 */

//swapped in my header stuff
// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Discussion Reply 6.1 - Header"));

// Welcome message
console.log('\n--Welcome to Discussion 6.1--');

//variable declaration
var jamesObject;

//variable defining
jamesObject = {
  firstName: 'James',
  lastName: 'Brown',
  birthYear: 1992, //added missing semicolon (":") after "birthYear" property
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  //calcAge creates an age property and adds it to the jamesObject
  //To use it, simply call the function outside of the object
  calcAge: function () {
    this.age = 2019 - this.birthYear;
  }
};

//call calcAge function within the james Object. This will create the age property you see me calling below in the console log
jamesObject.calcAge(); // replaced "Object" with "jamesObject" declared above

//output
console.log(`${jamesObject.firstName} is ${jamesObject.age} years old.\nHis year of birth is ${jamesObject.birthYear}.\n`);
