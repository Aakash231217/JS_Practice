// print 0 to 9
//for (var i=0; i<=9;i++){
  //  console.log(i);
//}
// not defined  -> since we used let console.log(i);
// byt if we use var
//console.log("value of i is",i); // it will print

let i=0;
for(;i<=9;i++){
    console.log(i);
    //it's a correct syntax
}

// first n natural nums;
let total=0
let nums=100;
for(let i=1;i<=nums;i++){
    total=total+i;
}
console.log(total);