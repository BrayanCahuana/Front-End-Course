let select = document.querySelector("select")
let parrafo = document.querySelector("p")
let titulo = document.querySelector("h1")

select.addEventListener("change", mostrarCanciones);




function mostrarCanciones(){
    let eleccion = select.value
    let contenido = eleccion.value
    let letradecanciones = ["lorem1","lorem2","lorem3","lorem4"]

switch (eleccion) {
    case "mr-tambourine":
            titulo.textContent = "contenido1"
            parrafo.textContent = letradecanciones[0]
        break
    case "cancion2":
            titulo.textContent = "contenido2"
            parrafo.textContent = letradecanciones[1]
        break
    case "cancion3":
            titulo.textContent = "contenido3"
            parrafo.textContent = letradecanciones[2]
        break
    case "cancion4":
            titulo.textContent = "contenido4"
            parrafo.textContent = letradecanciones[3]
        break
    default:
            titulo.textContent = "debes seleccionar una cancion"
            parrafo.textContent = "debes seleccionar una cancion"
        break
}
}