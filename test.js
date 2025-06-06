const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("four dollars should be 585.04 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(4);

    // Si 1 euro = 1.07 dólares y 1 euro = 156.5 yenes:
    // 4 dólares = (4 / 1.07) euros ≈ 3.7383
    // 3.7383 * 156.5 = 584.27 yenes
    const expected = (4 / 1.07) * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(4)).toBeCloseTo(585.05); 
})

test("1000 yen should be 5.55 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1000);

    // si 1 euro = 156.5 yenes y 1 euro = 0.87 pounds
    // 1000 yenes = (1000 / 156.5) euros ≈ 6.389 
    // 6.389 * 0.87 = 5.559 pounds
    const expected = (1000 / 156.5) * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1000)).toBeCloseTo(5.56);// despues de investigar porque los ultimos dos test no pasaban, me di cuenta que el error que me decia la terminal era porque no tenia los valores que se esperaban, los valores decimales deben llevar el toBeCloseTo y no toBe.
}) 