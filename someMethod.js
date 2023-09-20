const numbers= [3,5,6,9];

//kya ek bhi number even hai ??
//so it will return true

const ans=numbers.some((number)=>number%2==0);
console.log(ans);

const userCart =[
    {productId:1, productName:"mobile", price:12000},
    {productId:2, productName:"tv", price:17000},
    {productId:3, productName:"macbook", price:150000},
]

const result=userCart.some((cartItem)=>cartItem.price>100000);
console.log(result);