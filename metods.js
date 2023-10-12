//methods
//function inside object
const person = {
    firstName:"aakash",
    age:20,
    about:function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
    }
}
person.about();
console.log(person.about);



function personInfo(){
    console.log(`person name is ${this.firstName} and ${this.age}`);
}

const person1 ={
    firstName:"harsh",
    age:8,
    about:personInfo
}

const person2={
    firstName:"mohit",
    age:18,
    about:personInfo
}

const person3= {
    firstName:"nitish",
    age:17,
    about:personInfo()
}

person1.about();
person3.about()