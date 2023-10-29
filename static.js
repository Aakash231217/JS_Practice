class animal {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static classInfo(){
        return "this is class info";
    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}

const ans=animal.classInfo();
console.log(ans);