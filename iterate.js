const person ={
    name:"aakash",
    age:22,
    "person hobbies":["cricket","xleeping"]
}

for (let key in person){
    console.log(person[key]);
}

for (let key in person){
    console.log(`${key}:${person[key]}`);
}

console.log(Object.keys(person));

for(let key of Object.keys(person)){
    console.log(person[key]);
}