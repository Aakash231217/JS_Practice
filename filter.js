//filter method

const numbers =[1,3,2,4,6,8];
const isEven=function(number){
    return number%2===0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

//arrow
const evenNumbered = numbers.filter((number)=>{
   return number%2===0;
})
console.log(evenNumbered);