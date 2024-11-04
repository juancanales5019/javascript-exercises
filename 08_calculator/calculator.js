const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let counter = 0;
	arr.forEach(element => {
    counter += element;
  })
  return counter;
};

const multiply = function(arr) {
  let counter = 1;
  arr.forEach(element => {
    counter *= element;
  });
  return counter;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
