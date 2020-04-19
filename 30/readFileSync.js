var fs = require('fs');

var result = fs.readFileSync('./Nam.txt',{encoding: 'utf8'});

console.log(result);