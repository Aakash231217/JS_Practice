const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!!");

    },10000);
});

async function handlePromise(){
    console.log("Hello World!!");
    const val = await p;
    console.log("Namaste ");
    console.log(val);
}
handlePromise();