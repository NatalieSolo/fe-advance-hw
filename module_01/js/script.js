const topLine = 'qwertyuiop[]';
const middleLine = 'asdfghjkl;\'';
const bottomLine = 'zxcvbnm,./';

const topLength = topLine.length;
const middleLength = middleLine.length;
const bottomLength = bottomLine.length;

// console.log(topLine.charAt(0));
// console.log(topLine.charAt(topLength-1));

// console.log(middleLine.charAt(0));
// console.log(middleLine.charAt(middleLength-1));

// console.log(bottomLine.charAt(0));
// console.log(bottomLine.charAt(bottomLength-1));

let firstSearch = topLine.indexOf('[');
let secondSearch = topLine.indexOf(']');

const message = `3 constant:
topLine = ${topLine}, 
middleLine = ${middleLine},
bottomLine = ${bottomLine}

Lines length:
topLength = ${topLength}
middleLength = ${middleLength},
bottomLength = ${bottomLength}

First and last element:
topLine first = ${topLine.charAt(0)}, last = ${topLine.charAt(topLength-1)},
middleLine first = ${middleLine.charAt(0)}, last = ${middleLine.charAt(middleLength-1)},
bottomLine first = ${bottomLine.charAt(0)}, last = ${bottomLine.charAt(bottomLength-1)}

Number position:
'[' = ${firstSearch},
']' = ${secondSearch}`;

console.log(message);