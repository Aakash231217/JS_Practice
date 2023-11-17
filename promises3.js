const cart = ["shoes","pants","kurta"];
const promise=createOrder(cart);

promise.then(function(orderId){
    console.log(orderId)
})
.catch(function(err){
    console.log(err.message);
})// for handling error

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err= new Error("Cart is not valid");
            reject(err);
        }
      const orderId="12345";
      if(orderId){
        setTimeout(function(){
            resolve(orderId);
        },5000)
        resolve(orderId);
      }
    });
    return pr;
}

function validateCart(cart){
    return true;
}