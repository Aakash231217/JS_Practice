class animal {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}
const animal1= new animal("tom",2);
console.log(animal1);
console.log(animal1.isCute());


class Dog{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}
const tom = new Dog('tommy',3);
console.log(tom.isCute());

class Doggy extends animal{
   constructor(name,age,speed){
    super(name,age);
    this.speed=speed;
   }
   run(){
    return `${this.name} is running at ${this.speed}`
   }
}
const tommy= new Doggy("rocky",5,50);
console.log(tommy.run());