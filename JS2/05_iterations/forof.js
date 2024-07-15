// for of

// ["", "", ""]   --> Array in the String
// [{}, {}, {}]   --> Array in the Object

const arr = [1, 2, 3, 4, 5]

// forof
// for (const iterator of object) {         // here is directly excess the vaule of that key
    
// }

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps   --> object which hold key-values pairs unique

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, "-" , value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);     // object are not iterable for that we use (forin) 
// }