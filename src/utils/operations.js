

function addition(num1, num2) {
    return num1 + num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

module.exports = {
    addition,
    multiplication
}


/* Es lo mismo que arriba, puedes utilizar cualquiera para exportar
module.exports.addition = function (num1, num2) {
    return num1 + num2;
}

module.exports.multiplication = function (num1, num2) {
    return num1 * num2;
}
*/