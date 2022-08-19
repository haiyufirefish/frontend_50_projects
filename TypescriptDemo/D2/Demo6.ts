const numberArr = [1,233,3]
const numberArrr:number[] = [1,42,1]

const stringArr:string[] = ["a","c","d"]
//const undefinedArr:undefined[] = [undefined,' ',] error
const undefinedArr:undefined[] = [undefined,undefined]

//type deduction
const arrMix:(number| string)[] = ['a',1]

// type alias
type Lady = {name:string,age:number}
class Madam{
    name:string;
    age:number
}

const xiaoquququ: {name:string,age:number}[]= [
    {name:"a",age:18},
    {name:"v",age:18}
]

const xiaoququququ: Lady[]= [
    {name:"a",age:18},
    {name:"v",age:18}
]

const xiaoqn: Madam[]= [
    {name:"a",age:18},
    {name:"v",age:18}
]