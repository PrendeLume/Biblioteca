window.onload = function () {
    document.getElementById("busquedaNombre").addEventListener('keyup', busquedaLibros);
    var socios = JSON.parse(localStorage.getItem("socios"));
    distribuirLibros(socios);

    for (const libro of document.getElementsByClassName("borrarLibro")) {
        libro.addEventListener("click", borrarLibro);
    }

};

function busquedaLibros() {
    var socios = JSON.parse(localStorage.getItem("socios"));

    var abuscar = document.getElementById('busquedaNombre').value;
    var aux = [];

    for (var i = 0; i < socios.length; i++) {
        if (socios[i] !== null) {
            var NombreSocios = socios[i].nombre.toLowerCase();
            if (NombreSocios.includes(abuscar)) {
                aux.push(socios[i]);
            }
        }


    }
    distribuirLibros(aux);
};

function distribuirLibros(socios) {
    //Limpiamos pantalla
    document.getElementById("socios").innerHTML = "";

    for (let i = 0; i < socios.length; i++) {
        //Creacion filas
        if (i % 6 == 0) {
            var row = document.createElement("section");
            row.setAttribute("class", "row separacionTop ");
        }

        //creacion del articulo
        var articulo = document.createElement("article");
        articulo.setAttribute("class", "col-3 gris-claro");
        articulo.setAttribute("id", socios[i].id);
        //creacion del div(card)
        var div = document.createElement("div")

        div.setAttribute("class", "card row gris-titulo");
        //creacion de la imagen
        var imagen = document.createElement("img");
        imagen.setAttribute("src", socios[i].url);
        imagen.setAttribute("class", "card-img-top rounded");
        //creacion del card-body
        var divBody = document.createElement("div");
        divBody.setAttribute("class", "card-body");
        //creacion del titulo
        var titulo = document.createElement("h5");
        titulo.setAttribute("class", "card-title");
        titulo.innerHTML = socios[i].nombre + " " + socios[i].apellido;
        //Codigo
        var descripcion = document.createElement("p");
        descripcion.setAttribute("class", "card-text");
        descripcion.innerHTML = socios[i].codigo;
        // creacion del boton 'Modificar'
        var botonModificar = document.createElement("a");
        botonModificar.setAttribute("class", "btn boton d-flex justify-content-around btn-warning");
        botonModificar.setAttribute("href", "modificarSocio.html");
        botonModificar.innerHTML = "Modificar";
        botonModificar.addEventListener("click", function () { modificar(socios[i].id) });
        
        // creacion del boton 'eliminar'
        var botonEliminar = document.createElement("button");
        botonEliminar.setAttribute("class", "btn boton d-flex justify-content-around btn-danger mt-2");
        botonEliminar.addEventListener("click", function () { borrarLibro(socios[i].id) });
        botonEliminar.innerHTML = "Eliminar";

        //a??adir todo
        divBody.appendChild(titulo);
        divBody.appendChild(descripcion);
        divBody.appendChild(botonModificar);
        divBody.appendChild(botonEliminar);
        div.appendChild(imagen);
        div.appendChild(divBody);
        articulo.appendChild(div);
        row.appendChild(articulo);

        document.getElementById("socios").appendChild(row);
    }
};


function borrarLibro(id) {
    if (window.confirm("Esta seguro de que desea borrarlo")) {
        var socios = JSON.parse(localStorage.getItem("socios"));
        var pos = undefined;
        for (let i = 0; i < socios.length; i++) {
            if (socios[i].id === id) {
                pos = i;
                break;
            }
        }

        if (pos) {
            socios.splice(iposd, 1);
        } else {
            console.error("MAL");
        }
        localStorage.setItem("socios", JSON.stringify(socios));

        distribuirLibros(socios);
    }
}
function modificar(id){
    localStorage.setItem("socioModificar", id);
}