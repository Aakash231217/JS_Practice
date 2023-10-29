function hello(){
    console.log("hello world");
}

console.log(hello.prototype);//it's a constructor

const hello1= ["value1"];
if(hello1.prototype){
    console.log("present hai");
}
else {
    console.log("present ni hai");
}
function hello2(){
    console.log("hi there");
}
hello2.prototype.abc="abc";
hello2.prototype.xyz="singh";
hello2.prototype.sing=function(){
    return ("lalala");
}
console.log(hello2.prototype.sing());