//code ke execute hone se pahle jab global context create hopaa rha tha
// so hum fullname ko bhi undefined print hota hua dkh rhe theee 
 console.log(myFunc);
 var myFunc= function(){
    console.log("Hi there!!");
 }
 console.log("Hi there ")

 // TDZ- temporal dead zone
 let firstName;
 console.log(firstName);//but it will print undefined

 //const lastName; it will give error
 //console.log(lastName);