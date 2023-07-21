const band ={
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year:1968,
    anotherFamousSong:"kashmir"
};
const var1= band.bandName;
const var2= band.famousSong;
console.log(var1,var2);

//Now Destructuring
const {bandName,famousSong}=band;
console.log(bandName,famousSong);//->upper one and this one will give same output


//you can also change the variable
let {bandName: vary1, famousSong:vary2,...restProps}=band;
console.log(vary1,vary2);
console.log(restProps);// this will produce the year name like remaining things
//->this will produce thr same output
