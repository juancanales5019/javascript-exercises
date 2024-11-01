const reverseString = function(str) {
    let reversedStrArray = [];
    let separatedStrArray = Array.from(str);
    while (separatedStrArray.length >0) {
        reversedStrArray.push(separatedStrArray.pop());
    }
    return reversedStrArray.join("");
};
console.log(reverseString("HELLO"))
console.log(reverseString("WHAT ARE YOU DOING"))
// Do not edit below this line
module.exports = reverseString;