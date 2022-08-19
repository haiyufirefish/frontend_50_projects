class Pxjjh{
    public readonly _name:string
    constructor(public name:string,private age_:number) {
        this._name = name
    }

    // get age(){
    //     return this.age_ -10
    // }

    // set age(age:number){
    //     this.age_ = age
    // }
}

const ipx = new Pxjjh("hashimoto",25)
ipx.name = "moe"
console.log(ipx.name)
console.log(ipx._name)

abstract class Skill{
    abstract sk()
}

class Waiter extends Skill{
    sk() {
        console.log("water or cola?")
    }

}

class BaseTeacher extends Skill{
    sk() {
        console.log("masaage?")
    }

}

class ProfessionalTeacher extends Skill{
    sk() {
        console.log("b masaage?")
    }

}