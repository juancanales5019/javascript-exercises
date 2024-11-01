const removeFromArray = function(array,...args) { //here I had to google up how to declare n parameters: with rest ...
    let arrayFromArguments = args;
    for (element in arrayFromArguments) {
        for (i in array){
            if (arrayFromArguments[element] == array[i]){
                let position = array.indexOf(array[i]);
                array.splice(position,1);
            }
        }
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
