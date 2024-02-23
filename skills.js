function calculateNumbers(var1, var2) {
    console.log(var1 + var2);
}

function calculateProduct(var1, var2) {
    console.log(var1 * var2);
}

function calculateDivision(var1, var2) {
    console.log(var1 / var2);
}

module.exports = {
    calculateNumbers: calculateNumbers,
    calculateProduct: calculateProduct,
    calculateDivision: calculateDivision
}

// Path: index.js
var skills = require('./skills.js');

skills.calculateNumbers(2, 3);
skills.calculateProduct(2, 3);
skills.calculateDivision(2, 3);

