function addTwo(a,b){
    if(typeof b ==="undefined"){
        b=0;
    }
    return a+b;
}
const ans= addTwo(4);
console.log(ans);

function addTwos(a,b=0){
    return a+b;
}
const answer= addTwo(4);
console.log(answer);

