var idLibro = 7;
function addBook(){

    var formulario = document.alta;;
    var libros = JSON.parse(localStorage.getItem("libros"));
    console.log(libros);
    var existe = true;
    for (var i=0; i< libros.length; i++) {
        if (libros[i].ISBN.includes(formulario.isbn.value)){
            return alert("Este libro ya existe");
        }else{
            existe = false;
            
        }
    }
    if(!existe){
        var nuevoLibro = JSON.stringify(libros);
        nuevoLibro = nuevoLibro.replace(']', ',{"id":'+(++idLibro)+',"ISBN":"'+formulario.isbn.value+'","titulo":"'+formulario.titulo.value+'","autor":"'+formulario.autor.value+'","editorial":"'+formulario.editorial.value+'","cantidad":'+formulario.cantidad.value+',"precio":'+formulario.precio.value+',"url":"IMG/El-Cantar-mio-Cid.jpg","descripcion":"'+formulario.descripcion.value+'"}]');
        console.log(nuevoLibro);
        localStorage.setItem("libros", nuevoLibro);
        return alert("Completado");
    }else{
        return alert("Ha surgido un error inesperado");
    }
}