 const singHappyBirthday =()=>{
    console.log("Happy Birthday....");
 }
 singHappyBirthday();

 const isEven= (number)=>{
    return number%2===0

 }
 const even = isEven(7);
 console.log(even)


 const three = number =>number%3==0
 console.log(three(3));

 const findTarget= (array,target)=>{
   for(let i =0;i<array.length;i++){
      if(array[i]===target)
      return i;
   }
   return -1;
 }