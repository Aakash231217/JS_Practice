const users =[
    {userId:1,firstName:'aakash',gender:'male'},
    {userId:2, firstName:'mohit',gender:'male'},
    {userId:3,firstName:'sweta',gender:'female'},
]

for(let user of users){
    console.log(user)//it will give whole array
    console.log(user.userId);//it will just give id number
    console.log(user.firstName);
    console.log(user.gender);
}