/*
============================================
; Title:  week 4: Discussion 4.1
; Authors: Micah Connelly
; Date:   15 December 2019
; Modified By: Micah Connelly
; Description: Creating a simple javascript loop with twp (2) errors
;===========================================
*/

/*
; Expected output:
; A fibonacci sequence will be output 0-21
; Storm troopers are, in fact, a bad shot
*/

// import
const header = require('./header.js');
console.log(header.display("Micah", "Connelly", "Discussion 4.1 - Header"));

// variables
var f = [0, 1, 1, 2, 3, 5, 8, 13, 21];
var l = f.length;
var aStormTrooper
var poorAim = 'a bad shot';

// if statement, loop through array
if (aStormTrooper === !poorAim) {
    console.log('This is a fibonacci sequence:');
    for (var i = 0; i < l; i++) {
        console.log(f[i]);
    }
    console.log('Storm troopers are, in fact, a bad shot');
} else {
    console.log('The empire did nothing wrong, rebel scum!');
}

//end program