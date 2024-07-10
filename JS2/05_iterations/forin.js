const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// forin
// for (const key in object) {
    
// }

for (const key in myObject) {      // for print the key
    console.log(key);
}

for (const key in myObject) {      // for print the key and value
    console.log(`${key} shortcut is for: ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {       // applicable for the array too but we get keys
    console.log(key);
}

for (const key in programming) {        // here is the vlaue to excess the vlaue
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);    // here the map is not iterable
}

// INSHORT :
// OBJECT  : we use forin loop
// ARRAY : we use forof and many more