const cart =["shoes","pants","kurtas"];
createOrder(cart,function(orderId) //orderID 
{
    proceedToPayment(orderId)
}
)


//this code is way better than above one:
const promise= createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
})
