const myArray=["value1","value2","value3"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("value of var1",myVar1);
console.log("value of var2",myVar2);

// now destructuring

const myArray1= ["value1","value2","value3","value4","value5","value6"];
let [myVar,myVar3,myVar4]= myArray1;
//myVar->value1
//myVar3->value2
//myVar4->undefined
console.log(myVar1,myVar3,myVar4);

let[myAk,myAk1,...newAk]=myArray1;
console.log(newAk);
//myAk->value1
//myAk1->value2
//newAk(acts as array)-> rest all value3,4,5,6