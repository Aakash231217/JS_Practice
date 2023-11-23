//decorator function takes function and return function
function decorator(func){
    return function(...args){
        console.log("You are calling decorated",func.name);
        func.call(this,...args);
    };
}

function hi(name){
    console.log("hi there",name);
}
const decorated=decorator(hi);
decorated("aakash");