/*
;============================================
; Title:  week 5: assignment 5.4
; Authors: Micah Connelly
; Date:   12 January 2020
; Modified By: Micah Connelly
; Description: Filtering/Reducing Complex Data Structures
;===========================================
*/

/*
; Expected output:
; Two mapped arrays outputting composers
; By rating
; And by genre
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Assignment 5.4 - Header"));

// variables
var rating = "-- COMPOSER BY RATING --";
var genre = "-- COMPOSER BY GENRE --";
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
    lastName: 'Mozart',
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

// functions

// maping composers by rating
ratingComposers = composers.map(function (composer) {
  var ratings = {
    rating: composer.rating,
    lastName: composer.lastName
  }
  return ratings;
});

// maping composers by genre
genreComposers = composers.map(function (composer) {
  var genres = {
    genre: composer.genre,
    lastName: composer.lastName
  }
  return genres;
});

//foreach ouputting rating results
console.log('\n' + rating);
ratingComposers.forEach(function (composer) {
  console.log("Rating: " + composer.rating);
  console.log("Composer: " + composer.lastName);
  console.log('\n')
});

// foreach ouputting genre results
console.log(genre);
genreComposers.forEach(function (composer) {
  console.log("Genre: " + composer.genre);
  console.log("Composer: " + composer.lastName);
  console.log('\n')
});

// end program
