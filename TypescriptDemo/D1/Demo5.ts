function getTotall(one:number, two:number):number{
    return one+ two
}

const xxx= getTotall(1,3)

//  void needs to define
function sayHello():void{
    console.log("hello")
}

function errorFunction():never{
    throw new Error()
    console.log("hi")
}

function forNever():never{
    while(true){}
    console.log("hi")
}

// object parameter, type annotation
function add({one,two}:{one:number,two:number}){
    return one + two;
}

const total = add({one:1,two:2})

//make your code more robust
function getNumber({one}:{one:number}){
    return one
}

const o = getNumber({one:1})
