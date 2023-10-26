function hello(){
    console.log("Hello");
}
hello.call();
//call apply bind
const user1 ={
    firstName: "harshit",
    age:8,
    about: function(hobby,favMusician){
        console.log(this.firstName,this.age,hobby,favMusician)
    }
}

const user2 ={
    firstName: "aakash",
    age:12,

}
//user1.about.call(user2,"guitar","mozart");

//apply
//about.apply(user1,["guitar","bach"]);

//bind
const func=about.bind(user1,"guitar","bach");
func();