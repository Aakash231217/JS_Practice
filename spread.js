const array1=[1,2,3]
const array2 = [4,5,6];

const newArray = [...array1,array2];
console.log(newArray);

const newArray1 =[..."123456"];
console.log(newArray1);//'1', '2', '3', '4','5', '6'

//spread operator in objectFit: 
 const obj1 = {
    key1: "value1",
    key2: "value2",
    key1 : "value34", //key1 will be updated with value34
 };

 const obj2= {
    key1:"aaksh",
    key3: "value3",
    key4: "value4"
 }
 const newObject = {..."abcdefghijklmnopqrstuwxyz"}
 console.log(newObject);

