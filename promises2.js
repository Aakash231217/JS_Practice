const GITHUB_API ="https://api.github.com/users/Aakash231217"


const user=fetch(GITHUB_API);

user.then(function(data){
    console.log(data);
})

//A promise is an object represnting the eventual completion
//or failure of an asynchronous operation