const user ={
    firstName:"harshit",
    lastName:"singh",
    email:"rktaakash@gmail.com",
    age:2,
    address:"House Number, Colony, pincode, state",
    about: function(){
        return `${this.firstName} is ${this.age}`
    },
    is18: function(){
        return this.age>=18;
    }
}
const aboutUser= user.about();
console.log(aboutUser);


// function(that function create object)
//2. add key value pair
//3. object ko return krega

function createUser(firstName, lastName, email,age,address){
    const user={};
    user.firstName= firstName;
    user.lastName= lastName;
    user.email=email;
    user.age=age;
    user.address= address;
    user.about= function(){
        return `${this.firstName} is ${this.age}`
    };
    user.is18= function(){
        return this.age>=18;
    }
    return user;
}
const user1=createUser('aakash','singh','rktaakash@gmail.com',21,"renukoot");
console.log(user1);
const is18= user1.is18();
console.log(is18);
