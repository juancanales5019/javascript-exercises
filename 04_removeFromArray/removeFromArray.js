const removeFromArray = function(array,...args) { //here I had to google up how to declare n parameters: with rest ...
    let newArray = [];// here will be store the values that are not part of the given arguments...
    array.forEach(element => {
        if (!args.includes(element)){ //check if  the current element of array is not part of the arguments
            newArray.push(element) // if it is not found in the arguments then add element to the new array
        }
    });
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
