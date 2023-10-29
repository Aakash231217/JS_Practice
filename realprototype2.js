function createUser(firstName, lastName,email,age, address){
    const user= Object.create(createUser.prototype);
    user.firstName= firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address;
    return user;
}
createUser.prototype.about= function(){
    return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function(){
    return this.age>=18;
}
createUser.prototype.sing= function(){
    return "lalalala";
}

const user1= createUser('harshit','singh','harshit@gmail.com',20,"my addresss");
console.log(user1);
console.log(user1.is18());



