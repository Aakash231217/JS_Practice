//map
const numbers= [3,4,6,1,8];

//const square= function (number){
  //  return number*number;
//}

const squareNumber= numbers.map((number)=>{
    return number*number;
});
console.log(squareNumber);

const squareNumbers = numbers.map((number,index)=>{
    return `index: ${index}, ${number*number}`;
});
console.log(squareNumbers);

const users  = [
    {firstName:"aakash", age:20},
    {firstName:"abhi", age:23},
    {firstName:"jai", age:19},
    {firstName:"viru", age:28}
]

const userNames= users.map((user)=>{
    return user.firstName;
})
console.log(userNames);