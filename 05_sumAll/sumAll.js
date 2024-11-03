const sumAll = function(a,b) {
    let sum = 0;
    if (isNaN(a) || isNaN(b) || a < 0 || b <0 || typeof(a) == "string" || typeof(b) == "string" || !Number.isInteger(a) || !Number.isInteger(b))  {
        return "ERROR";
    }else if (a > b ){
        for (i = b; i <= a; i++){
            sum += i;
        }
    } else {
        if (a < b){
            for (i = a;i <= b; i++){
                sum += i;
            } 
        }
        
    }
    return sum;  
};
let test = sumAll(4,1);
console.log(test);
// Do not edit below this line
module.exports = sumAll;
