/*
============================================
; Title: Assignment 1.5
; Author: Micah Connelly
; Date: 01 December 2019
; Description: This program demonstrates the
; use of JavaScript values and variables
; in an application.
;===========================================
*/

//start program

/*
    Expected output:
    Defining  and displaying three employees employment records
*/

//variable declaration and assignment goes here...

//date formating
const johnDate = new Date(2000, 12, 24);
const janeDate = new Date(1999, 5, 27);
const scroogeDate = new Date(2010, 0, 1);

//employee one
var firstName1 = 'John'
var lastName1 = 'Doe';
var address1 = '123 Wishing Well St';
var payRate1 = 12.52.toFixed(2);
var hireDate1 = johnDate.toLocaleDateString();

//employee two
var firstName2 = 'Jane';
var lastName2 = 'Doe';
var address2 = '123 Wishing Well St';
var payRate2 = 10.02.toFixed(2);
var hireDate2 = janeDate.toLocaleDateString();

//employee three
var firstName3 = 'Mr.';
var lastName3 = 'Scrooge';
var address3 = '100 Wall St';
var payRate3 = 228.78942.toFixed(5);
var hireDate3 = scroogeDate.toLocaleDateString();



//employee output
console.log(`
Employee one first name: ${firstName1}
Employee one last name: ${lastName1}
Employee one address: ${address1}
Employee one pay rate: ${payRate1}
Employee one hire date: ${hireDate1}

Employee two first name: ${firstName2}
Employee two last name: ${lastName2}
Employee two address: ${address2}
Employee two pay rate: ${payRate2}
Employee two hire date: ${hireDate2}

Employee three first name: ${firstName3}
Employee three last name: ${lastName3}
Employee three address: ${address3}
Employee three pay rate: ${payRate3}
Employee three hire date: ${hireDate3}
 `);

 //end program