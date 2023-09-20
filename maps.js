//map is an iterable

//key->string 99%
//key->symbol 1%
const person ={
    firstName: "harshit",
    age:7,
    1:"one",
}
console.log(person.firstName);
console.log(person["firstName"]);
for(let key in person){
    console.log(typeof key)
}
//key value pair
const persons = new Map();
persons.set('firstName','Aakash');
persons.set(1,'one')
console.log(persons);
console.log(persons);
console.log(persons.get(1));
for(let key of persons.keys()){
    console.log(key,typeof key);
}

for(let [key, value] of persons){
    console.log(key,value);
}

const mens= new Map([['firstName','aakash'],['secondName','singh']]);
console.log(mens);


const person1= {
    id:1,
    firstName:"harshit"
}

const extraInfo= new Map();
extraInfo.set(person1, {age:8, gender:"male"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
