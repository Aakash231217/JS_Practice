function myApps(){
    const myVar= "value1";
    function myFunc(){
        const myVar= "value59";
        console.log("inside my function",myVar);
    }
    console.log(myVar);
    myFunc()
}
myApps();

//let and const are block scope 
//var are function scope

{
let firstName= "aakash";
console.log(firstName);
}
//console.log(firstName); it will be giving error
{
     var firstName= "mohit";
}
console.log(firstName);//accessible 

function myApp(){
    if(true){
        var firstName= "Hi AK!!";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();

