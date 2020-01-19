/*
;============================================
; Title:  week 6: Exercise 6.4
; Authors: Micah Connelly
; Date: 2020 January 19
; Description: Nested Object Literals
;===========================================
*/

/*
; Expected output:
; String of nested object literal
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Exercise 6.3 - Header"));

// variable
var ticket;
var today = new Date().toLocaleDateString();

// object
ticket = {
  name: 'Runza',
  id: '45',
  dateCreated: today,
  priority: 'high',

  person: {
    id: '45',
    firstName: 'Micah',
    lastName: 'Connelly',
    jobTitle: 'HungryHippo'
  }
}

// Output string of object literal
console.log(`Ticket ${ticket.id} was created on ${ticket.dateCreated} and assigned to employee ${ticket.person.firstName + ' ' + ticket.person.lastName} (${ticket.person.jobTitle})`);

// end program
