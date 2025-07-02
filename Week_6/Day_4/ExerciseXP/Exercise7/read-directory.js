const fs = require('fs');

const files = fs.readdirSync('.');
console.log('Files in current directory:');
files.forEach(file => console.log(file));
