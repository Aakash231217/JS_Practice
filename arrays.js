//intro to arrays-reference type
//so it's an object

//arrays-> collection of elements

let fruits= ["apple", "mango","grapes","papaya"];
console.log(fruits);

//let numbers=[1,2,3,4,"string",null, undefined];
//console.log(numbers);//it will wordBreak: 

fruits[1]="papaya";
console.log(fruits);
console.log(typeof fruits);
let obj ={} //object literal
//to check if fruits is array;
console.log(Array.isArray(fruits));
//it will return true;
console.log(Array.isArray(obj));// it will return false
