/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

let texto = "Esto es un texto de prueba"

function leetTransformation(texto){
    let transformedText = ""
    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == "a" || texto[i] == "A"){
            transformedText += "4"
        }else if(texto[i] == "b" || texto[i] == "B"){
            transformedText += "I3"
        }else if(texto[i] == "c" || texto[i] == "C"){
            transformedText += "["
        }else if(texto[i] == "d" || texto[i] == "D"){
            transformedText += ")"
        }else if(texto[i] == "e" || texto[i] == "E"){
            transformedText += "3"
        }else if(texto[i] == "f" || texto[i] == "F"){
            transformedText += "|="
        }else if(texto[i] == "g" || texto[i] == "G"){
            transformedText += "&"
        }else if(texto[i] == "h" || texto[i] == "H"){
            transformedText += "#"
        }else if(texto[i] == "i" || texto[i] == "I"){
            transformedText += "1"
        }else if(texto[i] == "j" || texto[i] == "J"){
            transformedText += ",_|"
        }else if(texto[i] == "k" || texto[i] == "K"){
            transformedText += ">|"
        }else if(texto[i] == "l" || texto[i] == "L"){
            transformedText += "1"
        }else if(texto[i] == "m" || texto[i] == "M"){
            transformedText += "/\/\'"
        }else if(texto[i] == "n" || texto[i] == "N"){
            transformedText += "^/"
        }else if(texto[i] == "o" || texto[i] == "O"){
            transformedText += "0"
        }else if(texto[i] == "p" || texto[i] == "P"){
            transformedText += "|*"
        }else if(texto[i] == "q" || texto[i] == "Q"){
            transformedText += "(_,)"
        }else if(texto[i] == "r" || texto[i] == "R"){
            transformedText += "l2"
        }else if(texto[i] == "s" || texto[i] == "S"){
            transformedText += "5"
        }else if(texto[i] == "t" || texto[i] == "T"){
            transformedText += "7"
        }else if(texto[i] == "u" || texto[i] == "U"){
            transformedText += "(_)"
        }else if(texto[i] == "v" || texto[i] == "V"){
            transformedText += "\/"
        }else if(texto[i] == "w" || texto[i] == "W"){
            transformedText += "\/\/"
        }else if(texto[i] == "x" || texto[i] == "X"){
            transformedText += "><"
        }else if(texto[i] == "y" || texto[i] == "Y"){
            transformedText += "j"
        }else if(texto[i] == "z" || texto[i] == "Z"){
            transformedText += "2"
        }else if(texto[i] == "1"){
            transformedText += "L"
        }else if(texto[i] == "2"){
            transformedText += "R"
        }else if(texto[i] == "3"){
            transformedText += "E"
        }else if(texto[i] == "4"){
            transformedText += "A"
        }else if(texto[i] == "5"){
            transformedText += "S"
        }else if(texto[i] == "6"){
            transformedText += "b"
        }else if(texto[i] == "7"){
            transformedText += "T"
        }else if(texto[i] == "8"){
            transformedText += "B"
        }else if(texto[i] == "9"){
            transformedText += "g"
        }else if(texto[i] == "0"){
            transformedText += "o"
        }else if(texto[i] == " "){
            transformedText += " "
        }
    }

    console.log(transformedText)

}

leetTransformation(texto)