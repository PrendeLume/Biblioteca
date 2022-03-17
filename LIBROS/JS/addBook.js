
function addBook(){

    var formulario = document.forms["alta"].elements;
    console.warn("form", formulario);

    var libros = JSON.parse(localStorage.getItem("libros"));
    
    console.warn("fiv", formulario.isbn.value);
    for (var i=0; i< libros.length; i++) {
        if (libros[i].ISBN.includes(formulario.isbn.value)){
            alert("Este libro ya existe");
            return false;
        }
    }

    if((formulario.cantidad.value != undefined) && (formulario.precio.value != undefined)){
        var nuevoLibro = {
            id: libros.length,
            ISBN: formulario.isbn.value,
            titulo: formulario.titulo.value,
            autor: formulario.autor.value,
            editorial: formulario.editorial.value,
            cantidad: formulario.cantidad.value,
            precio: formulario.precio.value,
            url: "",
            descripcion: formulario.descripcion.value
        };
        libros.push(nuevoLibro);

    }else{
        alert("Campos obligatorios vacios");
        return false;
    }
    
    localStorage.setItem("libros", JSON.stringify(libros));
    alert("Completado");
    return true;
}

window.onload = modificar;
function modificar(){
    var libroModificar = localStorage.getItem("libroModificar");
    if(libroModificar != undefined){

        var formulario = document.forms["modificar"].elements;
        var libros = JSON.parse(localStorage.getItem("libros"));
        console.warn(libros);
        formulario.isbn.value = libros[libroModificar].ISBN;
        formulario.titulo.value = libros[libroModificar].titulo;
        formulario.autor.value = libros[libroModificar].autor;
        formulario.editorial.value = libros[libroModificar].editorial;
        formulario.cantidad.value = libros[libroModificar].cantidad;
        formulario.precio.value = libros[libroModificar].precio;
        formulario.descripcion.value = libros[libroModificar].descripcion;
    }
   
    localStorage.removeItem("libroModificar");
}

function modificarLibro2(){
    
    var formulario = document.forms["modificar"].elements;
    console.warn("form", formulario);
    
    var libros = JSON.parse(localStorage.getItem("libros"));
    
    var libroModificar = localStorage.getItem("libroModificar");
    libros.splice(libroModificar, 1);
    var nuevoLibro = {
        id: libros.length,
        ISBN: formulario.isbn.value,
        titulo: formulario.titulo.value,
        autor: formulario.autor.value,
        editorial: formulario.editorial.value,
        cantidad: formulario.cantidad.value,
        precio: formulario.precio.value,
        url: "IMG/ejemplo.jpg",
        descripcion: formulario.descripcion.value
    };
    libros.push(nuevoLibro);


localStorage.setItem("libros", JSON.stringify(libros));
alert("Completado");

localStorage.removeItem("libroModificar");
return true;
}