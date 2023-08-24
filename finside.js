const app =()=>{
    const myFunc=()=>{
        console.log("hello from myFunc")
    }
    const addTwo =(num1, num2)=>{
        return num1+num2;
    }
    const mul= (num1,num2)=>num1*num2;
    console.log("Inside app");
    myFunc();
    console.log(addTwo(2,5))
}
app();