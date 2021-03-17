// este es un comentario de una linea

/*
este es un comentario de 
varias lineas
*/

//variable de tipo texto
let nombre = "Brayan";
let sistemaOperativo = "linux";
console.log;
typeof nombre; //esto me devuelve el string

//alert(`Mi nombre es ${nombre} y uso el sistema operativo ${sistemaOperativo}`);

//variable de tipo numero
let miedad = "16";
let peso = "52.1";
let altura = "1.70";
let bmi = peso / altura ** 2;
alert(bmi);

//la suma +
//la mutiplicacion *
//la division /
//el modulo %
let a = 6;
let b = 10;
let suma = a + b;
console.log(suma);
let resta = b - a;
console.log(resta);
let multiplicacion = b * a;
console.log(multiplicacion);
let division = b / a;
console.log(division);
let modulo = b % a;
console.log(modulo);
let potenciacion = b ** a;
console.log(potenciacion);

// declarar una variable para la formula de grados centigrados a farenheit
let celsius = 50
let farenheit = ((celsius)*(9/5)+32)
alert (farenheit)

//farenheit a celsius
let farenheit1 = 2;
let celsius1 = ((farenheit1-32)*(5/9));
alert(celsius1);



let brayan = {
    primernombre : "Alexandro",
    apellidopaterno : "Cahuana",
    apellidomaterno : "Utani",
};
let nombrecompleto = `${brayan.primernombre} ${brayan.apellidopaterno} ${brayan.apellidomaterno}`;
alert (nombrecompleto)




//vamos a crear un objeto donde almacenaremos nuestros hobbies favoritos , numero de mascotas que tenemos y ademas si somos hombres le damos true/false e igual con mujeres
// vamos a armar un alerta que reciba como datos nuestros nombres y de un mensaje de bienvenida
// vamos a escribir la formula cuadratica


let datos = {
    hobbies : "dormir" ,
    mascotas : "tres" ,
    hombre : true ,
    mujer : false ,

};
let alerta = `mis hobbies son ${datos.hobbies},cantidad de mascotas que tengo ${datos.mascotas}, soy ${datos.genero}`
alert (alerta)

let nuestronombre = "nombre de ususario"
alert (nuestronombre ,'Bienvenido a mi pagina en blanco :v')
document.write ("alerta")