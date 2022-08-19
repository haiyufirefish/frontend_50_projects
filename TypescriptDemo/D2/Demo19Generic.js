"use strict";
class SelectG {
    constructor(girls) {
        this.girls = girls;
    }
    getG(index) {
        return this.girls[index].name;
    }
}
const Selectx = new SelectG([
    { name: "dj" },
    { name: "xf" },
    { name: "gg" },
]);
console.log(Selectx.getG(1));
class SelectB {
    constructor(girls) {
        this.girls = girls;
    }
    getG(index) {
        return this.girls[index];
    }
}
