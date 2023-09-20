const users=[
    {userId:1, userName:"harshit"},
    {userId:2, userName:"aakash"},
]

const myUser= users.find((user)=>user.userId===2);
console.log(myUser);