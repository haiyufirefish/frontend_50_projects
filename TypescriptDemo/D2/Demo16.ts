interface wts{
    anjiao:boolean;
    say:()=>{

    }
}

interface tc{
    anjiao:boolean;
    skill:()=>{

    }
}
//animal:wts|tc union type: type protect
// assert 1
function judgeWho1(animal:wts|tc){
    if(animal.anjiao){
        (animal as tc).skill()
    }else{
        (animal as wts).say()
    }
    
}

function judgeWho2(animal:wts|tc){
    if('skill' in animal){
        animal.skill()
    }else{
        animal.say()
    }
}

function judgeWho3(first:string|number,second:string|number){
    if(typeof first === "string" || typeof second === "string"){
        return "${first}${second}";
    }
    return first+second
}

class NumObj {
    coux:number = 1;
}
// only for class instanceof, as java
function addObj(first:object|NumObj,second:object|NumObj){
    if(first instanceof NumObj && second instanceof NumObj){
        return first.coux+second.coux
    }

    return 0;
}