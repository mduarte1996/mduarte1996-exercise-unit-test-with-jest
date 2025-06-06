const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
} 

const fromDollarToYen = function(valueInDollar) {
    // convertimos dolares a euros
    let valueInEuro = valueInDollar / 1.07;
    // Convertimos el valor a yenes
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // convertimos yenes a euros
    let valueInEuro = valueInYen / 156.5;
    // Convertimos el valor a pounds
    let valueInPound = valueInEuro * 0.87;
    // Retornamos el valor en pounds
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };



