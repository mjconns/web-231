/*
============================================
; Title: Discussion 5.1
; Author: Sarah Kovar
; Date: 12 January 2020
; Modified By Micah Connelly
; Description: This program utilizes an array
; that contains two errors.
;===========================================
*/

// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Discussion reply 5.1 - Header"));

const catArray = [{
    name: 'Midnight',
    color: 'black',
    weight: '11 lbs'
  },

  {
    name: 'Samson',
    color: 'calico',
    weight: '8 lbs'
  },

  {
    name: 'Pippi',
    color: 'tiger stripe',
    weight: '6 lbs'
  },

  {
    name: 'Mix',
    color: 'tuxedo',
    weight: '15 lbs'
  },
  //changed brackets "[]" to curlys "{}"
  {
    name: 'Stormy',
    color: 'grey',
    weight: '7 lbs'
  }
];

//output. Display cat name, color, and weight.
catArray.forEach((cat) => {
  //Fixed part of missing parameter cat.name, removed array property "[0]"
  console.log(cat.name + " is a " + cat.color + " cat. " + cat.name + " weighs " + cat.weight + ".");
})
