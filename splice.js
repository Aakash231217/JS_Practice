//splice method
//start,delete,insert

const myArray= ['item1','item2','item3'];
//delete
//myArray.splice(1,1);
//console.log(myArray);
 //insert
 //myArray.splice(1,0,'inserted item');
 //console.log(myArray);

 //insert and delete

 myArray.splice(1,2,"inserted item1","inserted item2");
 console.log(myArray);