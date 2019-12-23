/*
============================================
; Title: Discussion 4.1
; Author: Sarah Kovar
; Date:   22 December 2019
; Modified By: Micah Connelly
; Description: This program utilizes an array
; that contains two errors.
;===========================================
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Assignment 4.4 - Header") + '\n');

//declare array
const artistArray = ["Johnny Cash", "Dolly Parton", "Miranda Lambert", "P!nk", "Good Charlotte"];
//#1 replaced ";" with a "," to correct array

//#2 iterate over array, displaying each artist and rank. Parameters: array. Output string.
function rankArtists(array) {
  //put for loop in parentheses "()"
  for (i = array.length - 1; i >= 0; i--) {
    console.log(i + 1 + "\t" + array[i]);
  }
}

//display list title
console.log("My Top 5 Musical Artists");

//display list by calling rankArtists function
rankArtists(artistArray);
