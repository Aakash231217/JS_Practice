function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    
}

myFunc(3,4,5,6,7,8,9);
//a->3
//b->4
//c->5.6.7.8.9

function addAll(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}

const ans=addAll(4,3,5,8,6)
console.log(ans);