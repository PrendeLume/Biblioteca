window.onload = function () {
    document.forms['busqueda']['busquedaTitulo'].addEventListener('keyup', busquedaLibros);
    distribuirLibros(datos.libros);
};

function busquedaLibros() {
    //var libros = datos.libros;
    var libros = JSON.parse(localStorage.getItem(libros));
    var abuscar = document.forms['busqueda']['busquedaTitulo'].value;
    var aux = [];

    for (var i=0; i< libros.length; i++) {
        if (libros[i].titulo.includes(abuscar))
            aux.push(libros[i]);
    }

    distribuirLibros(aux);       
};

function distribuirLibros(libros) {
    document.getElementById("libros").innerHTML = "";

    for (let i = 0; i < libros.length; i++) {
        //Creacion filas
        if (i % 4 == 0) {
            var row = document.createElement("section");
            row.setAttribute("class", "row");
            row.className+= " separacionTop";
        }
        1
        //creacion del articulo
        var articulo = document.createElement("article");
        articulo.setAttribute("class", "col-3");
        articulo.className += " gris-claro";
        //creacion del div(card)
        var div = document.createElement("div")

        div.setAttribute("class", "card");
        //creacion de la imagen
        var imagen = document.createElement("img");
        imagen.setAttribute("src", libros[i].url);
        imagen.setAttribute("class", "card-img-top");
        imagen.className += " rounded";
        //creacion del card-body
        var divBody = document.createElement("div");
        divBody.setAttribute("class", "card-body");
        //creacion del titulo
        var titulo = document.createElement("h5");
        titulo.setAttribute("class", "card-title");
        titulo.innerHTML = libros[i].titulo;
        // creacion descripcion
        var descripcion = document.createElement("p");
        descripcion.setAttribute("class", "card-text");
        descripcion.innerHTML = libros[i].descripcion;
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
        //console.log(articulo);
        row.appendChild(articulo);
        
        document.getElementById("libros").appendChild(row);
    }
};
