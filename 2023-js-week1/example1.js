const prompt = require ("prompt-sync") ({sigint:true});
const age = prompt("please insert your age: ")
if (age > 18){ 
console.log ("you are welcome to lakers")
}
else {
console.log
("Sorry,underaged user")
}

