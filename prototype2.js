const userMethods ={
    about: function(){
        return `${this.firstName} is ${this.age}years`
    },
    is18 :function(){
        return this.age>=18;
    },
    sing:function(){
        return "tara ram pum";
    }
}
function createUser(firstName , lastName, email, age, address){
    const user={}
    user.firstName= firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18;
    user.sing=userMethods.sing;
    return user;
}
const user1= createUser('aakash','singh','rktaakash@gmail',20,"rkt");
const user3= createUser('arshad','warsi','arshad@gmail',19,'jaipur');
console.log(user1.about());
console.log(user3.about());
console.log(user3.sing());