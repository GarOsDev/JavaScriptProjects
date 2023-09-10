
// Este es mi primer comentario
console.log("Hello World, learning JavaScript!")

// Variables
    var myString = "Prueba de cadena de texto"
    console.log(myString)

    let myString2 = "Esto es una cadena de texto"
    myString2 = "Valor de texto modificado"
    console.log(myString2)

    let myNumber = 6
    let myNumber2 = 5.36
    console.log("El valor de myNumber es " + myNumber)
    console.log("El tipo de valor de " + myNumber + " es: " + typeof myNumber)
    console.log("La suma de " + myNumber + " y " + myNumber2 + " es: " + (myNumber+myNumber2))

    let myBool = true
    console.log(myBool)

    myBool = null
    console.log(typeof myBool)
    console.log(myBool + myNumber2)

    let myUndefined
    console.log(myUndefined)

//Constantes
    const MY_CONST = "Mi propiedad constante"
    console.log("El valor de MY_CONST es: " + MY_CONST)


//Control de flujo
    if(myNumber == 6 && myString == "Prueba de cadena de texto"){
        console.log("El valor se cumple")
    }else{
        console.log("El valor no se cumple")
    }

//Funciones
    myFunction()

    function myFunction(){
        console.log("Mi funcion")
    }


//Listas
    let myList = ["Oscar","Garcia","@garosdev",30]
    console.log(myList)
    console.log(myList[2])
    console.log(typeof myList)

//Sets (no admite valore repetidos)
    let mySet = new Set(["Pepe","Pepe","Manoluto","Gafillas"])
    console.log(mySet)
    mySet.add("Pequeñito")
    console.log(mySet)

//Mapas
    let myMap = new Map([["Oscar",30],["Juanito",37],["zPato",18]])
    myMap.set("nikoleto",20)
    console.log(myMap)
    console.log(myMap.get("Oscar"))

//Bucles
    console.log("\nBucle FOR clasico")
    for(let i=0; i<myList.length;i++){
        console.log(myList[i])
    }

    console.log("\nBucle ForEach")
    for(let valor of mySet)
        console.log(valor)

    console.log("\nBucle While")
    let contador = 0
    while(contador < myList.length){
        console.log(myList[contador])
        contador++
    }

//Clases
    console.log("\nDefinicion de clases")
    class MyClass{
        constructor(name,age){
            this.name = name
            this.age = age
        }
    }

    let myClassObject = new MyClass("Oscar",30)
    console.log(myClassObject)
    console.log(myClassObject.name)

//ENUMS
    console.log("\nEnumerados")
    const myEnum = {
        DART: "dart", 
        PYTHON: "pyhon", 
        JAVA: "java", 
        JAVASCRIPT: "javascript", 
        SWIFT: "swift", 
        KOTLIN: "kotlin"
    }
    const MyEnum = myEnum.JAVASCRIPT
    console.log(MyEnum)