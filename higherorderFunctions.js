// a function which takes another functuion as an argument
//function x(){
    //console.log("Namaste");
//}// x is call back function
//function y(x){
   // x();
//}// y is higher order function

const radius= [3,1,2,4];
const circumference= function(radius){
    return 2*Math.PI*radius;
};
const diameter=function(radius){
      return 2*radius;
};
Array.prototype.calculate=function(logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(radius.map(circumference));
console.log(radius.calculate(diameter));