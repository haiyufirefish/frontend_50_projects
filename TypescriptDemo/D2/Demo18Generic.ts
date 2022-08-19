function join1(first:string|number,second:string|number){
    return `${first}${second}`;
}

function join2<T>(first:T,second:T){
    return `${first}${second}`;
}

join2<string>("x","b")
//generic
function myFun<ANY>(params:ANY[]){
    return params
}

myFun<string>(["123","2"])