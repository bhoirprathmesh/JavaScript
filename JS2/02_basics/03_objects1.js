// singleton - when we create a constructors then it form a singleton object.(only one object)
// for literals we cannot get the singleton object only from constructors

// object literals
const mysym = Symbol("Key1")

const jsuser = {                      // it is the object which is define from the key and value pair
    name : "Pratham", 
    "Full_Name" : "Prathmesh Mahendra Bhoir",  // here we cant access the fullname without by dot we need to use the square brackets
    age : 18,
    [mysym] : "myKey1",        // use of the symbol datatypes symbols in the object
    location : "Jaipur",
    email : "Pratham@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Saturday"]
} 

console.log(jsuser.email)
console.log(jsuser["email"])
// console.log(jsuser.Full_name)    //give error
console.log(jsuser["Full_Name"])
console.log(jsuser[mysym])
console.log(typeof jsuser[mysym])

jsuser.email = "Pratham@chatgpt.com"    //change
// Object.freeze(jsuser)                // stop changes 
jsuser.email = "Pratham@microsoft.com"  // makes no changes
console.log(jsuser); 

jsuser.greeting = function(){
    console.log("Hello JS user");
}
    
console.log(jsuser.greeting());

jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
} 

console.log(jsuser.greetingTwo());