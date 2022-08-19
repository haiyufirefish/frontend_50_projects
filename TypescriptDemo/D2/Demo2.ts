let count : number = 1
// count = "hah" //error, static type 
interface xiaoququ{
    uname:string,
    age:number
}
// self defined type
const niu:xiaoququ = {
    uname:'red',
    age:18
}

console.log(niu.age)
