// scope 

// Gobal Scope
var c = 300     // we need to avoid var
let a = 200

if (true) {
    // local Scope
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner : ", a);
}

console.log(a); 
// console.log(b);      // both b gives error
console.log(c);


//for every functions there is the different scope 
function one(){
    const username = "Pratham"

    function two(){           // child function can be access the parent function variable
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);      ---> give error as website is into the function which was ended

    two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);        --> give error
}
    
// console.log(username);        ---> give error

// +++++++++ interesting +++++++++++++

function addone (num) {
    return num + 1
}

addone(5)

const addTwo = function(num) {
    return num + 2
}

addTwo(5) 