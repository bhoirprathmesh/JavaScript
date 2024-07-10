// Map
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10})
console.log(newNums);

// without Map using forEach
const newMyNumbers = []

myNumers.forEach((num) => (
    newMyNumbers.push(num + 10)
))

// mixed Filter and Map
console.log(newMyNumbers);

const newNums1 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums1);