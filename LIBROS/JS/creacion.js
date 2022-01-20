for (let i = 0; i < datos.libros.length; i++) {
    //creacion del articulo
    var articulo = document.createElement("article");
    articulo.setAttribute("class", "col");
    articulo.className += " gris-claro";
    //creacion del div(card)
    var div = document.createElement("div")

    div.setAttribute("class", "card");
    //creacion de la imagen
    var imagen = document.createElement("img");
    imagen.setAttribute("src", datos.libros[i].url);
    imagen.setAttribute("class", "card-img-top");
    imagen.className += " rounded";
    //creacion del card-body
    var divBody = document.createElement("div");
    divBody.setAttribute("class", "card-body");
    //creacion del titulo
    var titulo = document.createElement("h5");
    titulo.setAttribute("class", "card-title");
    titulo.innerHTML = datos.libros[i].titulo;
    // creacion descripcion
    var descripcion = document.createElement("p");
    descripcion.setAttribute("class", "card-text");
    descripcion.innerHTML = datos.libros[i].descripcion;
    // creacion del boton 'verMas'
    var boton = document.createElement("a");
    boton.setAttribute("class", "btn");
    boton.className += " btn-primary";
    boton.setAttribute("href", "#");
    boton.innerHTML = "Ver Mas";

    //añadir todo
    divBody.appendChild(titulo);
    divBody.appendChild(descripcion);
    divBody.appendChild(boton);
    div.appendChild(imagen);
    div.appendChild(divBody);
    articulo.appendChild(div);
    console.log(articulo);

    document.getElementById("1").appendChild(articulo);
}


