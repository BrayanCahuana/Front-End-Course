//condicionales


//if (se cumple esta condicion) {
//mi codigo que se ejecute si es veerdadero
//}else if (si se cumple esta otra condicon) {
//mi codigo si se ejecuta esta otra condicion
//}else if (si se cumple esta otra condicon) {
//mi codigo si se ejecuta esta otra condicion
//}

let condicion = false;
if (condicion === true) {
  console.log("es verdadero");
} else {
  console.log("es falso");
}

let a = 0;
let b = 0;

a = 5;
b = 4;

if (a == 5) {
  console.log("adivinaste");
  //alert (`${a}`)
} else {
  console.log("fallaste");
}

let lenguajedeprogramacion = "";
if (lenguajedeprogramacion == "pyton") {
  console.log("python es xvr");
} else if (lenguajedeprogramacion == "js") {
  console.log("js es mejor");
} else if (lenguajedeprogramacion == "php") {
  console.log("js es mejor");
} else if (lenguajedeprogramacion == "") {
  console.log("no le sabes? o_O");
}

console.log("-------------- Tarea -----------------");

let canciones = "mueve-la-cabeza";

if (canciones == "mueve-la-cabeza") {
  console.log("mueve la cabeza que se pone tiesa");
} else if (canciones == "soy-guapo") {
  console.log("soy guapo lo se");
} else if (canciones == "triciclo-peru") {
  console.log(
    "Alma para conquistarte, corazón para quererte y vida para vivirla junto a ti"
  );
}
console.log("------------------------------");




//FUNCIONES

function miFuncion() {
    console.log("Mi primera funcion es lo mejor del mundo!!!!.");
    console.log("las funciones me sirven para no repetir mi codigo");
    console.log("las funciones me ayudan a escribir mejor codigo");
  }
  
  // miFuncion()
  
  function imprimeMiNombre(nombre) {
    if (nombre === "") {
      return "Debes ingresar un nombre";
    }
  
    if (nombre === undefined) {
      return "Debes ingresar un valor valido";
    }
  
    return ` Mi nombre es ${nombre}`;
  }

  function calculamisañosperro (edad) {
      if (edad == undefined)
      return "debes ingresar un valor"
      if (edad > 0 && edad < 100){
          return `mi edad en años peero es ${edad*7}`
        if (edad == 0 ) {
            return "no es valido"
        }
      }
  }


function calcular (clima){
    if (clima === undefined ) {
        return "debes ingresar datos"
    }
    if (clima === "lluvioso"){
        return `el clima es ${clima}`
    }
    if (clima === "nublado"){
        return `el clima es ${clima}`
    }
    if (clima === "seco"){
        return `el clima es ${clima}`
    }
}
console.log (calcular())
console.log (calcular("lluvioso"))
console.log (calcular("nublado"))
console.log (calcular("seco"))



  
  // y && -> si mi condicion1 es cierta Y mi condicion2 es cierta hago algo....
  
  // o  || -> si mi condicion1 es cierta O mi condicion2 es cierta hago algo....
  
  //con un parametro
  //imprimeMiNombre("Josue")
  
  //console.log(imprimeMiNombre("Josue"));
  
  //console.log(imprimeMiNombre(""));
  
  console.log(imprimeMiNombre());
  
  console.log(imprimeMiNombre("Josue"));
  
  console.log(imprimeMiNombre(""));
  
  // //imprimir el resultado de mi funcion con parametros
  // console.log(imprimeMiNombre("Josue"))
  
  // //imprimir el resultado de mi funcion sin pasar parametros
  // console.log(imprimeMiNombre(), "funcion sin parametros")
  
  // //imprimir el resultado de mi funcion pasandole un paramtero vacio
  // console.log("")
  // //sin parametros
  // imprimeMiNombre()
  
  let cadena_de_texto = "es un tipo string";
  
  let numero = "es de tipo number";
  
  let booleano = " es de tipo bool(true/false)";
  
  //let undefined = undefined
  
  // undefined , es un valor "indefinido" , lo que significa que no tiene asigando un valor
  // pero la variable o constante que lo contiene si existe




  let seleccionar = document.querySelector("select")