class Person {
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age= age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const[firstName,lastName]= fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const person1 = new Person("Aakash","singh",19)
//console.log(person1.fullName);

//person1.setName("Shristi","singh");
//console.log(person1.fullName);
// now by using get we can use it as property
person1.fullName="hi ak";
console.log(person1);