// const tinderUser = new Object()    // singleton object

const tinderUser = {}  // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn  = false

console.log(tinderUser);

const regularUser = {
    email: "some@example.com",
    fullname: {
        userfullname: {
            firstname: "Prathmesh",
            lastname: "Bhoir"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = {obj1, obj2} // here we get two different object 
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)  // here we combine the two object
console.log(obj4)

const obj5 = {...obj1, ...obj2} // sprade operator as we use in array most of time
console.log(obj5)

// array with n number of the objects
const user = [
    {
        id : 1,
        email : "user1@example.com"
    },
    {
        id : 2,
        email : "user2@example.com"
    },
    {
        id : 3,
        email : "user3@example.com"
    }
]

console.log(user[1].email)
// console.log(user[1]["email"])        //both are same

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // least use

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course1 = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "prathamesh"
}

// three way to print abstraction
console.log(course1.courseInstructor)

const {courseInstructor} = course1    // de-structureing
// is use to reduce the number of times object is call for multiple times
console.log(courseInstructor);

const {courseInstructor : instructor} = course1
console.log(instructor)

// json format for the object
// {
//     "name" : "Prathmesh",
//     "coursename" : "js",
//     "price" : "999"
// }

// it also be in the form of array with in object.
[
    {},
    {},
    {}
]
    