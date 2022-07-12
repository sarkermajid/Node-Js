// OS
const Os = require('os');

console.log(Os.userInfo());
console.log(Os.homedir());
console.log(Os.hostname());
console.log(Os.totalmem());
console.log(Os.freemem());

// if we need only 2 function

const {totalmem, freemem} = require('os');
console.log(totalmem());
console.log(freemem());

console.log(__dirname);
console.log(__filename);

// Path

const path = require('path');
const extensionName = path.extname('index.js');
console.log(extensionName);

const joinName = path.join(__dirname + '/views_joinName');
const joinName2 = path.join(__dirname + '/../views_joinName');
console.log(joinName);
console.log(joinName2);
