const fs = require('fs');

const source = 'source.txt';
const destination = 'destination.txt';

const content = fs.readFileSync(source, 'utf-8');
fs.writeFileSync(destination, content);

console.log(`Copied content from ${source} to ${destination}`);
