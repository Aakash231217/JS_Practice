const numbers = [4,2,5,8];

function myFunc(number,index){
    console.log("index is",index);
    console.log(`${number}*2 = ${number*2}`);
}


numbers.forEach(myFunc);

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});

const users  = [
    {firstName:"aakash", age:20},
    {firstName:"abhi", age:23},
    {firstName:"jai", age:19},
    {firstName:"viru", age:28}
]

users.forEach(function(user){
    console.log(user.firstName);
})

for (let user of users){
    console.log(user.firstName);
}

users.forEach((user,index)=>{
    console.log(user.firstName,index);
})