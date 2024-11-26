const getTheTitles = function(obj) {
    let titles = [];
    obj.forEach(element => {
        titles.push(element.title);
    });
    return titles;
    //map the object to look for any key related to tile;
    //select the title key to create the new array of title;
};
// Do not edit below this line
module.exports = getTheTitles;
