//constructor, similar like java or cpp

class PP{
    // public name:string;
    // constructor(name:string){
    //     this.name = name
    // }
    constructor(public name: string){

    }
}

class PPP extends PP{
    constructor(public age:number) {
        super('jx')
    }
}

const PX = new PP("x")
const pxx = new PPP(4)
console.log(PX.name)
console.log(pxx.name)
console.log(pxx.age)