const findTheOldest = function(obj=people) {
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
    obj.forEach(element => {
      if(biggestAge == element.age){
        console.log(element.name);
        return element.name;
      }
    });
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
// Do not edit below this line
//module.exports = findTheOldest;
