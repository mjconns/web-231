/*
;============================================
; Title:  week 7: exercise 7.2
; Authors: Micah Connelly
; Date: 2020 January 24
; Description: Constructor Functions
;===========================================
*/

/*
; Expected output:
; List of 5 employees
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Exercise 7.2 - Header") + '\n');

// function
function GetEmployees(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
};

// creating employees object
const employee = [
  new GetEmployees('1', 'Adam', 'Atkins', 'Tradesman'),
  new GetEmployees('2', 'Brett', 'Benson', 'Master Tradesman'),
  new GetEmployees('3', 'Colin', 'Conway', 'Metal Smith'),
  new GetEmployees('4', 'Derek', 'Doolin', 'Master Metal Smith'),
  new GetEmployees('5', 'Edward', 'Essence', 'Master Carpenter')
];

// looping through object
employee.forEach(function(employee){
  console.log(employee.id + ' ' + employee.firstName + ' ' + employee.lastName + ' ' + employee.title)
});
