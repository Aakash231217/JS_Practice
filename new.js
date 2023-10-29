function createUser(firstName,age){
    this.firstName=firstName;
    this.age=age;
}
createUser.prototype.about=function(){
    console.log(this.firstName,this.age);
}
const user1= new createUser("aakash",20);

//new keywords
//1. empty object this= {}
// 2. return this
console.log(user1);

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(true)
    }
}