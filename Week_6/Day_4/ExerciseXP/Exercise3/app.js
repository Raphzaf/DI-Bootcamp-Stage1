const { readFile, writeFile } = require('./fileManager');

const content = readFile('Hello World.txt');
console.log('File Content:', content);

writeFile('Bye World.txt', 'Writing to the file');
console.log('Content written to Bye World.txt');
