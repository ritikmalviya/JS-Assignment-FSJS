// 30. Write a script which generates a random hexadecimal number.
let num = (Math.random() * 0xffffff * 1000).toString(16);
const hexadecimal = '#' + num.slice(0,6); 

console.log(hexadecimal)