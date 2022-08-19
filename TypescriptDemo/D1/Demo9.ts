//interface to filter 
// interface restrict the type of data
// if it is transformed into js, interface doesn't exist
interface Girl{
    name:string,
    age:number,
    bust:number,
    waist?:number
    [propName:string]:any
    say():string
}

interface Teacher extends Girl{
    teach():string
}

const girl = {
    name:"a",
    age:18,
    bust:94,
    waist:23,
    sex:"female",
    say(){
        return "welcome"
    },
    teach(){
        return "I will teach you"    
    }
}

class Xiaoj implements Girl{
    [propName: string]: any
    name: "x"
    age: 14
    bust: 23
    waist?: 44
    say(): string {
        return "s"
    }

}



const screenResume = (name:string,age:number,bust:number)=>{
    age < 24 &&  bust>=36 && console.log(name+" next round");
    age >= 24 || bust<36 && console.log(name+" not pass");
}

const screenResume_ = (girl:Girl)=>{
    girl.age < 24 &&  girl.bust>=36 && console.log( girl.name+" next round");
    girl.age >= 24 ||  girl.bust<36 && console.log( girl.name+" not pass");
    girl.waist && console.log(girl.waist)
}


const getResume = (name:string,age:number,bust:number)=>{
    console.log(name + " age is ",age)
    console.log(bust + " bust is ",bust)
}

screenResume('da',18,37)
screenResume_(girl)