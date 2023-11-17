const cart= ["shoes","pants","kurta"];
createOrder(cart)
  .then(function(orderId){
    console.log(orderId);
  })
 .then(function(){
    proceedToPayment(orderId);
 })
 .catch(function(err){
    console.log(err.message);
 });

 function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    })
 }