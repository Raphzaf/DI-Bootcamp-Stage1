const greet = require('./greeting');
const showColorfulMessage = require('./colorful-message');
const readFileContent = require('./read-file');

console.log('\n👉 Greeting Message:');
console.log(greet('Developer'));

console.log('\n👉 Colorful Messages:');
showColorfulMessage();

console.log('\n👉 Reading File Content:');
readFileContent();
