/* The Promise Object represents the eventual completion (or failure) of an asynchronous operation and its resulting values.

A Promise is in one of these states:
• pending: initial state, neither fulfilled nor rejected.
• fulfilled: meaning that the operation was completed successfully.
• rejected: meaning that the operation failed.
*/

// promise is of two ways 1.comsume & 2. create
const promiseOne = new Promise(function (resolve, reject){
    // Do an ansyn task
    // DB calls, cryptograpghy, networks
    setTimeout(function(){
        console.log("Async task completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async2 task completed");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise2 Consumed")
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username:"Pratham", email:"pratham@exapmle.com"})         // most of time we pass the data which is an object(it may be an array)
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = false    // make it true for understand
        if(!error){
            resolve({username:"Pratham", password:"123"})
        }else{
            reject('Error : Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false    // make it true for understand
        if(!error){
            resolve({username:"Javascripts", password:"123"})
        }else{
            reject('Error :JS went wrong')
        }
    }, 1000)
});

async function consumePromisedFive(){   // cannot hanndle the error directly we can use try catch function.
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromisedFive()

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("E: ", error);
    }
}

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))