/*
============================================
; Title:  connelly-header-test.js
; Author: Micah Connelly
; Date:   8 December 2019
; Modified By: Micah Connelly
; Description: Tests the formatted header
;===========================================
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a well-formatted string header
 */

const header = require('./header.js');

console.log(header.display("Micah", "Connelly", "Exercise 2.2 - Header"));
