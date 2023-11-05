function myFunc(){
    function innerFunction(){
        console.log("hello world");
    }
    return innerFunction;
}
const ans= myFunc();
ans();
console.log(ans);

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName,lastName);
    }
    return printName;
}
const answer= printFullName("Aakash","Singh");
answer();
//jab functon kisi aur ke function ko call krte hue arguments
//lekr utarta hai wo closures hain