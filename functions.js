function singHappyBirthday(){
    console.log("Happy Birthday");
}

function twoplus(){
   console.log(2+4);
}

twoplus();
//call, invoke, run ->same wordSpacing: 

function add(){
    return 5+4;
}

console.log(add());

function sum(number1, number2){
      return number1+number2;
}

console.log(sum(7,11));

function isEven(number){
    return number%2===0;
}

console.log(isEven(4));

//input: string
//output:first character

function firstCharacter(anyString){
    return anyString[0];
}
console.log(firstCharacter("singh"));

//input: array, target (number)
//output: index of target if found otherwise -1

function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target)return i;
    }
    return -1;
}
const myArray=[1,3,6,7]
console.log(findTarget(myArray,6));


//function expression
 const singhHappyBirthday= function(){
    console.log("Happy Birthday");
 }



 const iseven= function(number){
    return number%2===0;
 }
console.log(iseven(5));
