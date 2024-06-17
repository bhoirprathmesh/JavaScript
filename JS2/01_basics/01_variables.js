const accountId = 144553 
let accountEmail = "Prathmesh@gmail.com"
var accountPassword = "12345" // (now we are not using var)
accountCity = "Jaipur" // (we can use this i.e without variable but not recommended to use)
let accountState;

// accountId = 2 (not allowed) --> if we use const keyword we cannot change the the value

// accountEmail = "Nikita@gmail.com"

// accountPassword = "67890"

// accountCity = "Mumbai"

// console.log(accountCity);

/*
NOTE : Prefer not to use var - because of issue in block scope and function scope.
*/

console.log(accountId, accountEmail, accountPassword, accountCity, accountState) //print in the normal format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); //print in the tabular format