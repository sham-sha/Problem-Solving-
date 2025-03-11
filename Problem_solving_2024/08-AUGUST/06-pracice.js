/**
 * An e-commerce application needs to add a sales tax of 8% to the price of an item at checkout.
Using the Price and tax as percentage and print the total amount of the item

 */


let price = 200;
let taxInPercentage = 8;
let taxAmount = (price * taxInPercentage ) / 100;

let totalAmount = price + taxAmount;

console.log("The total amount is " + totalAmount);