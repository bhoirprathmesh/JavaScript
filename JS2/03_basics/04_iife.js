// Immediately Invoked Function Expression (IIFE)

// IIFE is used when we not want any problems from the local and gobal scope in any function.
// there is the problem of pollution due to the global scope variable to remove it we use IIFE
// also to call the function immediately
(function chai(){      
    // name IIFE
    console.log(`DB Connected`);
})();

// ()() // first for function defination and second for execution 

( (name) => {               // for the arrow function    
    console.log(`DB Connected Two ${name}`);
})('Pratham') 