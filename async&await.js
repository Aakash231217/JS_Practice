const p= new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!!")
    },10000);
})

//always return a promise
//async and await are used to handle promises
async function getData(){
   const val= await p;
   console.log(val);
}
 // await is a keyword that can be used inside async function 
