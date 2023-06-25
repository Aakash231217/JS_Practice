let fruits= ["apple","mango", "grapes"]
// push banana
fruits.push("banana")
console.log(fruits); //['apple', 'mango', 'grapes', 'banana']

//remove
//let popped=fruits.pop();
//console.log("poppped",popped); //banana

//unshift--> to add at start [banana,apple,mango,grapes]
fruits.unshift("banana");
console.log(fruits);

//shift-> to remove from start
let removed=fruits.shift();
console.log(removed);