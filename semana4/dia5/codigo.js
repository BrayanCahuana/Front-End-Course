function sumar (numero1,numero2){
    let total = numero1 + numero2
    let escribirsuma = document.write (`suma total = ${total}`)
    return escribirsuma
}

sumar (3,4)

function restar (numero3,numero4){
    let total1 = numero3 - numero4
    let escribiresta = document.write (`resta total = ${total1}`)
    return escribiresta
}

restar (9,1)

function multiplicar (numero5,numero6){
    let total2 = numero5 * numero6
    let escribirmultiplicacion = document.write (`multiplicacion total = ${total2}`)
    return escribirmultiplicacion
}

multiplicar (9,2)

function funcion_cuadratica (a,b,c){
    let total3 = (-b + (b**2) - (4*a*c)) /(2*a)
    let escribirfuncion_cuadratica = document.write (`funcion cuadratica total = ${total3}`)
    return escribirfuncion_cuadratica
}

funcion_cuadratica (9,2,3)

//contador

let contador = 0
while (contador <10){
    console.log (contador)
    contador ++
}
//funcion recursiva

function recursividad (contador) {
    if (contador  >= 10){
        return
    }
    console.log (contador)
    recursividad(contador + 1)
}
recursividad (9)

//funciones anidadas

function sumarCuadrados (a,b) {
    function cuadrado (x){
     return x*x
 }
 return cuadrado (a)+ cuadrado(b)
}
console.log (sumarCuadrados(2,3))




function binomio(a,b){
    function suma_cuarta (a,b){
        return a**4+b**4
    }
    function suma_cubo (a,b){
        return 4*(a**3*b)+4*(a*b**3)
    }
    function multi_cuadrados (a,b){
        return 6*(a**2*b**2)
    }
    return suma_cuarta(a,b) + suma_cubo(a,b) + multi_cuadrados (a,b)
}
console.log (binomio(2,3))



//typeof

const mipeticion = [
    {
        nombre: "nombre1",
        edad: 34,
        altura : 1.70
    },
    {
        nombre: "nombre2",
        edad: 40,
        altura : 1.50
    }
]

function generarId (nombre,edad){
    return nombre + edad*2
}
generarId (mipeticion[0].nombre,mipeticion[0].edad)