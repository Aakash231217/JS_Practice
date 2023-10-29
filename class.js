//class keywords
// classes are fake
class CreateUser{
    constructor(firstName, lastName, email,age, address){
        console.log("Constructor called")
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;

    }
    about(){
        return `${this.firstName} is ${this.age} years`
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return "lalalalalala"
    }
    func(a){
        console.log(a);
    }
}

const user1 = new CreateUser('aakash','singh','rktaakash',18, 'renukoot');
console.log(user1.is18());
user1.func('hi')