const fibonacci = function(n) {
    if (typeof n !== 'number') {
        parseInt(n)
    } else {
        n
    }
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    let fib = [1,1];
    let result;
    //get the fibonacci list up to n
    for(let i = 0; i < n-2; i++){
        //get the the last two values of the fibonacci sequence
        let sliced = fib.slice(-2);
        //add up the last two values
        let reduced = sliced.reduce((a,b)=>{return a+b;});
        //append the new value to the fibonacci sequence
        fib.push(reduced);
    }
    //store the last element of the fibonacci sequence in result
    result = parseInt(fib.slice(-1));
    return(result);
};
// Do not edit below this line
module.exports = fibonacci;
