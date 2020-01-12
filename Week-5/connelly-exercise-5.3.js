/*
;============================================
; Title:  week 5: exercise 5.2
; Authors: Micah Connelly
; Date:   12 January 2020
; Modified By: Micah Connelly
; Description: Object collections exercise
;===========================================
*/

/*
; Expected output:
; a list of my favorite foods
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Exercise 5.2 - Header"));

// variables
var displayVal = "-- COMPOSERS --"
var composers = [{
    firstName: 'Antonín ',
    lastName: 'Dvořák',
    genre: 'Classical',
    rating: 10
  },
  {
    firstName: 'Pyotr Ilyich',
    lastName: 'Tchaikovsky',
    genre: 'Classical',
    rating: 10
  },
  {
    firstName: 'Claude',
    lastName: 'Debussy',
    genre: 'Classical',
    rating: 9
  },
  {
    firstName: 'Wolfgang Amadeus',
    lastName: ' Mozart',
    genre: 'Classical',
    rating: 9
  },
  {
    firstName: 'Johann Sebastian',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 8
  }
];

// loop & output
console.log('\n' + displayVal);
composers.forEach(function (composers) {
  console.log(
    "Last Name: " + composers.lastName + ", Genre: " + composers.genre + ", Rating: " + composers.rating
  );
});

// end program
