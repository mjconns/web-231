/*
============================================
; Title:  Exercise 5.1
; Author: James Brown
; Date:   1/8/2020
; Modified By Micah Connelly
; Description: A simple program that calls a function to iterate over a new Map() object.
;===========================================
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Discussion 5.1 - Header"));

//variable declaration
var foodTypes;

//keyed collection defining
foodTypes = new Map(); // added "new" to properly declare MapConstructor

//set key value pairs in the map
foodTypes.set(`Bar`, `A Rueben`);
foodTypes.set(`Italian`, `Pasta`);
foodTypes.set(`Chinese`, `Lo Mein`);
foodTypes.set(`Mexican`, `A Tostada`);

/**
 * Params: none
 * Response: console logs key value pairs in map
 * Description: console logs key value pairs in map
 */
function loopKeys() {
  for (var [key, value] of foodTypes) {
    console.log(value + ' is considered ' + key + ` food`);
  }
};

//output
loopKeys(); //added "()" to properly call function

//end program
