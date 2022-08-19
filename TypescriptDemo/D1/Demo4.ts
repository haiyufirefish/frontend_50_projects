// type annotation
// type inference

// annotation
let countx:number;
countx = 123;
// it can deduce the type of variable, as python
let countinference = 123

// regular1: if deduction is 
// if any occurs, add type annotation
function getTotal(one:number, two:number){
    return one+ two
}

const x = getTotal(1,3)

const xiaoqu = {
    name:"a",
    age:18
}