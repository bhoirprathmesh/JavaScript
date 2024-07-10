// forEach

const coding  = ["js", "rb", "py", "java", "cpp"]

// 1.
coding.forEach( function (val){
    console.log(val);
} )

// 2.
coding.forEach(element => {
    console.log(element);
});

// 3.
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
