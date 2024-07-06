const user = {
    username : "Pratham",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to Website `);
        console.log(this);
        // this keywords is use to give current context
    }
}// to use the scope of variable in the object so we use this keyword

user.welcomeMessage()
user.username = "Nikita"
user.welcomeMessage()

console.log(this);  // --> output is the empty object

function chai(){
    let user1 = "Pratham"
    // console.log(this);
    console.log(this.user1);      // --> give output undefined (as this keywords works only in the object not in the function)
}

chai()

const chai1 = () => {     // Arrow functions
    let user1 = "Pratham"
    // console.log(this);       // output is the empty object
    console.log(this.user1);     // same output undefined
}

chai1()

// Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}
    
console.log(addTwo (3, 4))

// Implicit return (when an arrow function is of one line)
const addTwo1 = (num1, num2) =>  num1 + num2   
// const addTwo1 = (num1, num2) =>  (num1 + num2) --> both are same  

const addTwo2 = (num1, num2) => ({username : "Pratham"}) 

console.log(addTwo(6, 4))

console.log(addTwo2())
