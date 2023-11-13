function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    console.log("Hi Aakash");
}
x();

//but but but with let 
function xy(){
    for (let i=1;i<=5;i++){
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
    console.log("Now done")
}
xy()

// var is printing 6 but with the help of it will work perfectly fine because of scope chaining
