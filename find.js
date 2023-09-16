const myArray= ["Hello","cat","dog","lion"];
function isLength3(string){
    return string.length==3;
}
const ans=isLength3("dog");
console.log(ans);

//. find will give first occurence of the word
const result= myArray.find(isLength3);
console.log(result);

const answer= myArray.find((string)=>string.length==4)
console.log(answer);