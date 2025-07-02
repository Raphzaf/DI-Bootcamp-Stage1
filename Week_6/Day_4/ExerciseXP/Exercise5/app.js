const _ = require('lodash');
const { add, multiply } = require('./math');

const sum = add(10, 20);
const product = multiply(5, 6);

const numbers = [5, 10, 15, 20];
const max = _.max(numbers);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Max number is: ${max}`);
