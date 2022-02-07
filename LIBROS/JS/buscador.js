window.onload = function () {
    document.forms['busqueda']['busquedaTitulo'].addEventListener('keyup', busquedaLibros);
    distribuirLibros(datos.libros);

    alert(document.getElementsByClassName("borrarLibro").length);
    for (const libro of document.getElementsByClassName("borrarLibro")) {
        libro.addEventListener("click", borrarLibro);
    }
    
};

function busquedaLibros() {
    //var libros = datos.libros;
    var libros = [];
    for (const iterator of localStorage.key) {
        if(localStorage.key.includes("libro")){
            libros.push(iterator);
            console.log(iterator);
        }
    }
     
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
        if (i % 6 == 0) {
            var row = document.createElement("section");
            row.setAttribute("class", "row separacionTop");
        }
        1
        //creacion del articulo
        var articulo = document.createElement("article");
        articulo.setAttribute("class", "col-2 gris-claro");
        articulo.setAttribute("id", libros[i].id);
        //creacion del div(card)
        var div = document.createElement("div")

        div.setAttribute("class", "card");
        //creacion de la imagen
        var imagen = document.createElement("img");
        imagen.setAttribute("src", libros[i].url);
        imagen.setAttribute("class", "card-img-top rounded");
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
        // creacion del boton 'Modificar'
        var botonModificar = document.createElement("a");
        botonModificar.setAttribute("class", "btn d-flex justify-content-around btn-warning");
        botonModificar.setAttribute("href", "#");
        botonModificar.innerHTML = "Modificar";

        // creacion del boton 'eliminar'
        var botonEliminar = document.createElement("a");
        botonEliminar.setAttribute("class", "btn d-flex justify-content-around btn-danger mt-2 borrarLibro");

        botonEliminar.innerHTML = "Eliminar";

        //añadir todo
        divBody.appendChild(titulo);
        divBody.appendChild(descripcion);
        divBody.appendChild(botonModificar);
        divBody.appendChild(botonEliminar);
        div.appendChild(imagen);
        div.appendChild(divBody);
        articulo.appendChild(div);
        //console.log(articulo);
        row.appendChild(articulo);
        
        document.getElementById("libros").appendChild(row);
    }
};


function borrarLibro(){
    console.log(this.parentNode.parentNode.parentNode.id);
    confirm("Quiere borrar este libro??");
    localStorage.removeItem("libro " + this.parentNode.parentNode.parentNode.id);
    distribuirLibros(localStorage.getItem("libro"));
}
