"use strict";

// ES6+ Assignment Questions
// Try converting these codes to ES6 syntax:

/*
1.
var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);
*/

let aloo = 1;
if(aloo === 1) {
    let a = 2;
    console.log(a);
}
console.log(aloo);

/*
2.
var multiply = function(x, y) {
  return x * y;
};
*/
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(6, 5));

/*
3.
var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"
*/
const customer = {
    name: "Bhaalo"
};
const card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
};
let message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece`
console.log(message);

/*
4. 
var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2];
*/
const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
const [CEO, ROC8, Mentor, ...teamNeog] = Neog;
console.log(`CEO: ${CEO} and Mentor: ${Mentor}`);

/*
5.
var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname);
*/
const arr = ["MA", "TA", "PA", "CA"];
let [firstName, surname, ...team] = arr;
console.log(firstName);
console.log(surname);

/*
6.
var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};
*/
let Aaloo = "Tasty";
let Bhaloo = "Cute";
const Obj = {
  Aaloo,
  Bhaloo
};
console.log(Obj);

/*
7. 
var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));
*/
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

/*
8. 
var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
};
*/
const arithmeticsObj = {
    sum: (num1, num2) => num1 + num2,
    multiply: (num1, num2) => num1 * num2
};
console.log(arithmeticsObj.sum(5, 7));
console.log(arithmeticsObj.multiply(30, 10));

/*
9.
var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
var operation = avengers.operation,
  members = avengers.members;
*/
const avengers = {
    operation: "Assemble",
    members: [
        {
            ironMan: "Tony Stark"
        },
        {
            captainAmerica: "Steve Rogers"
        },
        {
            blackWidow: "Natasha Romanoff"
        }
    ]
};
const { operation, members } = avengers;
const [ ironMan, captainAmerica, blackWidow ] = members;
console.log(operation, members);
console.log(ironMan, captainAmerica, blackWidow);

/*
9.
const packIt = (...args) => console.log(args)
packIt(1,2,3,5,5)
*/
const packIt = (...args) => Array.from(args);
console.log(packIt(1,2,3,5,5));