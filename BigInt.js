//Big Int -> can be written via BigInt(n)  and 1234n
let myNumber= BigInt(11234567898765432123456763234567632345);
let sameNumber= 1234567872345676543234563456534534n
console.log(myNumber+sameNumber);

//booleans and comaprison operator
let num1=5;
let num2=7
console.log(num1>num2);

//  == and ===
let number="7";
let number2=7;
console.log(number==number2); //true-> since it only checks the value

let newNumber="8";
let newNumber2=8;
console.log(newNumber===newNumber2);//false-> since one is string and other one is int
//!= and !==

let newer="8";
let newest=8;
console.log(newer!=newest)//false since it's considering string and int are different
console.log(newer!==newest)//true since it checks data type then returns and hence values are same

