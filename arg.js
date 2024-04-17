function hello(y){
    const a= "varA";
    const b = "varB";
    return function(){
        console.log(a,b,y);
    }
}
const ans= hello("arg");
ans();
