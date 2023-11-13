console.log("Start");
//fetch function returns a promise
setTimeout(function cbT(){
    console.log("CBT timeout");
},5000);

fetch("https://api.hotstar.com").then(function cbF(){
    console.log("CB Netflix");
});

console.log("end");