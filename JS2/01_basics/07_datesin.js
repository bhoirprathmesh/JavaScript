let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); 

let myCreatedDate = new Date(2023, 0, 23) //months starts from 0 i.e its Jan
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate1 = new Date("2023-01-14")
// let myCreatedDate1 = new Date("01-14-2023")
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);   // give seconds from the 01 JAN 1970
console.log(myCreatedDate1.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// CTRL + SPACE -> to see the property
newDate.toLocaleString('default', {
    weekday: "long"
})