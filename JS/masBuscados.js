
var buscados = datos.masBuscados;

for (let i = 0; i < buscados.length; i++) {
    
    //creacion del div principal
    if(i == 0){

        var divCarrusel = document.createElement("div");
        divCarrusel.setAttribute("class", "carousel-item active");
    }else{

    var divCarrusel = document.createElement("div");
    divCarrusel.setAttribute("class", "carousel-item");
    }
    //creacion de la imagen
    var imagen = document.createElement("img");
    imagen.setAttribute("src", buscados[i].url);
    imagen.setAttribute("class", "d-block w-100");
    imagen.setAttribute("style", "height: 750px;");
    //creacion del div texto
    var divTexto = document.createElement("div")

    divTexto.setAttribute("class", "carousel-caption d-none d-md-block");
    divTexto.setAttribute("style", "background-color: rgba(0, 0, 0, 0.6)");

    //creacion del titulo
    var titulo = document.createElement("h4");
    titulo.innerHTML = buscados[i].titulo;
    
    // creacion descripcion
    var descripcion = document.createElement("p");
    descripcion.innerHTML = buscados[i].descripcion;

    //añadir todo
    divTexto.appendChild(titulo);
    divTexto.appendChild(descripcion);
    divCarrusel.appendChild(imagen);
    divCarrusel.appendChild(divTexto);

    document.getElementById("carrusel").appendChild(divCarrusel);
}