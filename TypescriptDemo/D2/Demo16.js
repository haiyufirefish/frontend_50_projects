"use strict";
function judgeWho1(animal) {
    if (animal.anjiao) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
function judgeWho2(animal) {
    if ('skill' in animal) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
function judgeWho3(first, second) {
    if (typeof first === "string" || typeof second === "string") {
        return "${first}${second}";
    }
    return first + second;
}
class NumObj {
    constructor() {
        this.coux = 1;
    }
}
function addObj(first, second) {
    if (first instanceof NumObj && second instanceof NumObj) {
        return first.coux + second.coux;
    }
    return 0;
}
