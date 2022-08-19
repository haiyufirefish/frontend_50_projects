"use strict";
function getService(status) {
    if (status === 0) {
        return "massage";
    }
    else if (status === 1) {
        return "spa";
    }
    else {
        return "dbj";
    }
}
var Status;
(function (Status) {
    Status[Status["MASSAGE"] = 3] = "MASSAGE";
    Status[Status["SPA"] = 4] = "SPA";
    Status[Status["DBJ"] = 5] = "DBJ";
})(Status || (Status = {}));
;
const result = getService(0);
console.log(`i go to ${result}`, result);
