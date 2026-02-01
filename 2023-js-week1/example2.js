const prompt = require ("prompt-sync") ({sigint:true});

const number = prompt("enter a number: ")

if (number == 0) {
    console.log ("The number is zero")
}

else if (number > 0) {
    console.log ("The number is positive")
}
 
else {
    console.log ("The number is negative")}