let firstName= "Aakash";
let ages=22;

if(firstName[0]=="A" && ages<18){
    console.log("your name starts with A");
}
else {
    console.log("inside else");
}

//nested if else

//winning number =19
 // 19 your guess is right: //17 too low
 //20 too height: 

 let winningNumber=19;

 let userGuess=+prompt("Guess a number");
//prompt always takes input as string
//"but if you write " +prompt("Guess"); ->it will convert to number
 if(userGuess===winningNumber){
    console.log("Your guess is right");
 }
 else {
    if(userGuess < winningNumber)
    console.log("too low !!!");
    else {
        console.log("too high");
    }
 }
// if else if if else 

let temp=23;
if(temp<0){
    console.log("extremely cold")
}
else if(temp<24){
    console.log("extremely hot");
}