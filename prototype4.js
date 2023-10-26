const obj1={
    key1:"value1",
    key2:"value2"
}
const obj2={
    key3:"value3"
}
//but obj2.key1 will be undefined but we want even obj2.key1 should also call value1
console.log(obj2.key3);
//__proto__, [[prototype]]
//prototype
const obj3={
    key4:"value5",
    key5:"value6"
}
const obj4= Object.create(obj3);
obj4.key7="value8";
console.log(obj4.key4);
console.log(obj4.__proto__);

