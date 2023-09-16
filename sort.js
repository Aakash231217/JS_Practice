const numbers = [5,9,1200,400,3000];
numbers.sort();
console.log(numbers)
//output 1200 3000 400 5 9
// it is happening just because it is taking it as string

const userName= ['harshit','aakash','paaji','sakht','ABC'];
userName.sort();
console.log(userName);

const number = [5,9,1200,410,3000];
number.sort((a,b)=>{
    return a-b;
});
//number.sort((a,b)=>a-b);
//a=1200 b=410
//a-b ----> positive (greater than 0)---> b,a
// a-b  ---> 790
//a-b-----> negative -----> a,b
// 5,9   -----> -4
console.log(number);

//price lowToHigh or HightoLow

const products = [
    {productId:1 , productName:"p1", price:300},
    {productId:2, productName:"p2", price:600},
    {productId:3 , productName:"p3", price:100},
    {productId:4 , productName:"p4", price:7000},
]

//lowToHigh
const lowToHigh=products.slice(0).sort((a,b)=>{
    return a.price-b.price;
}
)
console.log(products);