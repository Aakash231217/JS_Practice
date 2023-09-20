//sets
const numbers = new Set([1,2,3,5,4,6,4]);
console.log(numbers);
numbers.add(97);
numbers.add(49)
//store data
//sets also have its own methds
// no index-based accesss
//order is not guarantedd
// unique items only
console.log(numbers);

if(numbers.has(6)){
    console.log("is present");
}
else {
    console.log("numbers is not present");
}

const myArray =[1,2,4,4,5,6,6,7];
const unique= new Set(myArray);
console.log(unique);
console.log(myArray.length);
let length=0;
for(let element of unique){
    length++;
}
console.log(length);

