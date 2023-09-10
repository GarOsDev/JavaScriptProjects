

/**
 *  
 * Crea un programa que sea capaz de generar e imprimir todas las 
 * permutaciones disponibles formadas por las letras de una palabra.
 * - Las palabras generadas no tienen por qué existir.
 * - Deben usarse todas las letras en cada permutación.
 * - Ejemplo: sol, slo, ols, osl, los, lso 
 * 
 */



while (true) {

    let palabra = 'java', palabraFormada = ""
    let contenedorPalabra = [], contenedorNumeros = []
    let posIni = 0, contador = 0, contadorPalabra = 0, factorial = 1
    let verif = false

    

    for (let i = 1; i <= palabra.length; i++) {
        factorial = i * factorial  
    }


    while (true) {


        let posRand = Math.floor(Math.random() * palabra.length)

        if (contenedorNumeros.includes(posRand)) {
            continue
        }

        if (posRand != posIni) {
            const element = palabra[posRand];
            palabraFormada += element
            posIni = posRand
            contador++

            contenedorNumeros.push(posRand)
        }

        if (contador === palabra.length) {
            verif = true

            if (contenedorPalabra.includes(palabraFormada)) {
                palabraFormada = ""
                contador = 0
                contenedorNumeros = []
                continue
            } else {
                contenedorPalabra.push(palabraFormada)
                palabraFormada = ""
                contador = 0
                contenedorNumeros = []
            }
        }

        if (verif === true) {
            contadorPalabra++
            verif = false
            posIni = 0

            if (contenedorPalabra.length === factorial) {
                break
            }
        }



    }

    console.log(contenedorPalabra)
    break

}