function myFunc2(name){
    console.log("inside my func2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("Hello there !!!");
    callback("Aakash");
}


myFunc(myFunc2);