// super, override, extend
class Ladyb{
    content = "hi boy";
    sayHello(){
        return this.content;
    }
}

// extend:
class Xj extends Ladyb{
    sayLove(){
        return "I l you"
    }
    sayHello(): string {
        return super.sayHello()+"  honey";
    }

   
}

const goddess = new Xj();
console.log(goddess.sayHello())
console.log(goddess.sayLove())