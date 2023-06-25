//clone array
let array1= ["array1","array2"];
let array2=array1;
console.log(array2===array1);

//slicing
let array3=["item1","item2"];
let array4=array3.slice(0);
console.log(array3===array4); //-->false 
//since the sliced part goes into array 4 of array3 so any changes in array3
//wouldn't be affected in array4

//concat
let array5=["item1","item2"];
let array6= [].concat(array5);
array5.push("item3");
console.log(array5===array6); //--> false
console.log(array5); // item1 item2 item3
console.log(array6); // item1 item 2


//new way --> spread operator

let array7= [...array5];
console.log(array7===array5)
console.log(array7);
console.log(array5);

//what to do if we add extra elements in array7 

array7=array5.slice(0).concat(["item45,item67"]);
console.log(array7);

array7= [].concat(array5,["item92"]);
console.log(array7);

//you can also write like
let oneArray=["item267","item268"];
let array=[...array7,...oneArray];
console.log(array);
