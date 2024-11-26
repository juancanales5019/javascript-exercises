const palindromes = function (str) {
    str.toLowerCase;
    // str to array
    let arr = [];
    for (n in str){
        arr.push(str[n]);
    }
    // take away punctuation and spaces.
    let filterArray = arr.filter((element)=>{
        /^[a-z0-9]+$/.test(element);
    });
    
    // join array in normal order and store it in stringA
    let stringA = filterArray.join("");
    console.log(stringA);
    // join array in reversed order and store it in stringB
    let reversedArr = filterArray.reverse(0);
    let stringB = reversedArr.join("")
    console.log(stringB);
    // compare if both string are the same
    if (stringA === stringB){
        return true;
    } else{
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
