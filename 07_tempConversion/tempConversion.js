const convertToCelsius = function(f) {
//°C = (°F - 32) × 5/9
//Round a number to 1 decimal place
//Usando Math.round(): Multiplica el número por 10, redondea, y luego divide por 10.
//Math.round() does not work
//use toFixed(1) instead
    let c = (f -32) * (5/9);
    let rounded = Math.round((c*10)/10);
    let fixed = parseFloat(c.toFixed(1));
    return fixed;
};

const convertToFahrenheit = function(c) {
  //°F = °C × (9/5) + 32.
    let f = c * (9/5) +32;
    let rounded = Math.round((f*10)/10);
    let fixed = parseFloat(f.toFixed(1));
    return fixed;
};
console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(73.2));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
