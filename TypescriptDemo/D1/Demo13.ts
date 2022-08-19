// private is for encapsulation
class Pxjj{
    constructor(private age_:number) {
        
    }

    get age(){
        return this.age_ -10
    }

    set age(age:number){
        this.age_ = age
    }
}

const dajiao = new Pxjj(28)
dajiao.age = 83
console.log(dajiao.age)

// static
class Girlxx{
    static sayL(){
        return "ai laohu you!"
    }
}

const girlx = new Girlxx()
console.log(Girlxx.sayL())