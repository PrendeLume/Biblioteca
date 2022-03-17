var idLibro = 7;
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

    console.warn(formulario.url)

    if((formulario.cantidad.value != undefined) && (formulario.precio.value != undefined)){
        //nuevoLibro = nuevoLibro.replace(']', ',{"id":'+(++idLibro)+',"ISBN":"'+formulario.isbn.value+'","titulo":"'+formulario.titulo.value+'","autor":"'+formulario.autor.value+'","editorial":"'+formulario.editorial.value+'","cantidad":"'+formulario.cantidad.value+'","precio":'+formulario.precio.value+',"url":"IMG/El-Cantar-mio-Cid.jpg","descripcion":"'+formulario.descripcion.value+'"}]');
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