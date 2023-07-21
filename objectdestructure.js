const users =[
    {userId:1, firstName:'akash', gender: 'male'},
    {userId:2, firstName:'aditya', gender: 'male'},
    {userId:3, firstName:'nitish', gender: 'female'},
]

const [{firstName: user1firstName},,{gender:user3gender}] = users;
console.log(user1firstName);
console.log(user3gender);