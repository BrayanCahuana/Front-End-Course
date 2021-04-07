function quehacer () {
    console.log ("lavar la ropa")
    console.log ("Pasear al perro")
    console.log ("sacar la basura")
    console.log ("cocinar algo")

}


function lavar () {
    console.log ("lavar la ropa")
}

function pasear () {
    console.log ("pasear al perro")
}

function sacarLaBasura () {
    console.log ("sacar la basura")
}

function coninar () {
    console.log ("cocinar algo")
}


function ListaDeQueHacer () {
    lavar();
    pasear();
    sacarLaBasura();
    cocinar();

}

function ListaDeQueHacer (callback) {
    callback(err,lavar);
    pasear();
}