const submit = document.querySelector('.submit-btn')

submit.addEventListener('click', function() {

    const inputPrestamo = document.querySelector('#prestamo')

    const inputMeses = document.querySelector('#meses')

    const inputInteres = document.querySelector('#interes')

    let resultado = 0

    let interes = 0

    interes = inputInteres.value / 100 + 1

    resultado = (inputPrestamo.value * interes) / inputMeses.value

    document.getElementById('resultado').innerHTML = `${resultado.toFixed(2)} Euros`
})