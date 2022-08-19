function getService(status:number){
    if(status === 0){
        return "massage"
    }else if(status === 1){
        return "spa"
    }else{
        return "dbj"
    }

}

// const Status = {
//     MASSAGE:0,
//     SPA:1,
//     DBJ:2
// };
// enum
enum Status {
        MASSAGE =3,
        SPA,
        DBJ,
};

const result =  getService(0)
console.log(`i go to ${result}`,result)