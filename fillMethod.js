//fill
// value start end

const myArray = new Array(10).fill(83);
console.log(myArray);

const mineArray= [1,2,3,4,5,6 ,7 ,8, 9];
mineArray.fill(1e9,2,4);
// it will only fill index= end-start
console.log(mineArray);