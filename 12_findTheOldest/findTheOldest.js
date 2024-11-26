const findTheOldest = function(obj) {
    //get ages of all people and include it in the object
    let ages = [];
    obj.forEach(element => {
        let ageGetter = parseInt(element.yearOfDeath) - parseInt(element.yearOfBirth);
        element.age = ageGetter;
        //get and array of ages
        ages.push(element.age);
    });
    //sort ages to determine the highest number which will be the last;
    let sortedArray = ages.sort();
    let biggestAge = sortedArray.pop();
    //return the oldes
    let objElement = {};
    obj.forEach(element => {
        if(biggestAge == element.age){
          objElement = element;
        }
    });
    return objElement;
};
// Do not edit below this line
module.exports = findTheOldest;
