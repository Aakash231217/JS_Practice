const cart = ["shoes","pants","kurtas"];

api.createOrder(cart,function(){
    api.proceedToPayment()
})
