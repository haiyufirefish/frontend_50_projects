interface GG{
    name :string
}
class SelectG<T extends GG>{
    
    constructor(private girls:T[]){}
    // this generic restriction
    getG(index:number):string{
        return this.girls[index].name;
    }

}
//input must have name parameter
const Selectx = new SelectG([
    {name:"dj"},
    {name:"xf"},
    {name:"gg"},
    ]
)

console.log(Selectx.getG(1));


class SelectB<T extends string|number>{
    
    constructor(private girls:T[]){}
    // this generic restriction
    getG(index:number):T{
        return this.girls[index];
    }

}