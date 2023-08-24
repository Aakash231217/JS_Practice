const numbers = [1,2,3,4,5,19];


//sum of all numbers in array
const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},100);

//accumulator, currentValue, return
//1               2            3
//3               3            6
//6               4            10
//10              5            15
//15              10           25

console.log(sum);

const userCart = [
    {productId:1, productName:"mobile", price:12000},
    {productId:2,productName:"laptop",price:15000},
    {productId:3,productName:"tv",price:10000}

]
const totalAmount= userCart.reduce((totalPrice,currentProduct)=>{
     return totalPrice+currentProduct.price
},0)

console.log(totalAmount);
// total price     currentValue        return
//    0               {}                 12000
//  12000              15000              27000
//34000                10000              37000
 