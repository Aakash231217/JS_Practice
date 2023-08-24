const person = {
    firstName: "harshit",
    gender:"male",
}

function printDetail(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
    
}
//or
function printDetails(firstName,gender){
    console.log(firstName);
    console.log(gender);
}

printDetail(person);
printDetails(person);