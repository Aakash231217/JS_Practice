//primitve
let num1=6;
let num2=num1;
console.log("vlue of num1",num1);
console.log("value of num2",num2);
// num1=6 num2=6
num1++;
console.log("vlue of num1",num1);
console.log("value of num2",num2);
//num1=7, num2=6


//reference
//array
let array1=["item1","item2"];
let array2=array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("array1",array1);
console.log("array2",array2);
//output array1= item1 , item2, item3
//array2= item1, item2, item3
//but why??????????

//primitve
// let num1=4 (it will be stored in stack)
//let num2=num1
//primitve types will be stored in stack separately and won't change it's value because they are stored independtly in blocks


// reference
//now here comes the role of heap
//let a1=["item1","item2"]-->it will be stored in heap
// let a2
