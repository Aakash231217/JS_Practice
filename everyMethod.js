//everyMethod

const numbers=[2,4,6,8,10];
const ans=numbers.every((number)=>number%2==0);
//call back function --> true/false (boolean)
//every method--> true/false (boolean)for every element not for one or two

console.log(ans);

const userCart =[
    {productId:1, productName:"mobile", price:12000},
    {productId:2, productName:"tv", price:17000},
    {productId:3, productName:"ipod", price:10000},
]

const result=userCart.every((cartItem)=>cartItem.price < 30000);
console.log(result);