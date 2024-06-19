const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + Value");

console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`); // string interpulation

const gameName = new String('Pratham-hc-com')

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const newString1 = gameName.slice(-8, 4)
console.log(newString1);

const newStringOne ="    pratham    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Prathmesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));