
// OBJETO LITERAL

var objetoPersona = {
    // Propiedades o atributos, siempre separados por ','
    nombre: ["Bob", "Smith"],
    alias: {
        pila: "Bobir",
        apel: "fisher"
    },
    edad: 32,
    genero: "masculino",
    intereses: ["musica", "esquí"],

    // Funcion que permite al objeto hacer algo con sus atributos. Sería el equivalente a los metodos
    bio: function(){
        console.log(this.nombre[0] + " " + this.nombre[1] + " tiene " + this.edad + " años. Le gusta la " + this.intereses[0] + " y " + this.intereses[1])
    }  
}

objetoPersona.bio()

let edad = objetoPersona.edad
console.log(edad)

objetoPersona.edad = 30
let edadActualizada = objetoPersona.edad
console.log(edadActualizada)