//recursividad

let mi_nombre = prompt("adivina mi nombre")

while (mi_nombre !== "josue"){

    if (mi_nombre === "josue"){
        alert ("adivinaste")
        break
    }
    else {let match = prompt("sigue intentando")
    if (match ==="josue"){ 
    alert ("adivinaste")
    break
}
}
}