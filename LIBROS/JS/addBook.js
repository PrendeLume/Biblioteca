
function addBook(){

    var formulario = document.forms['alta'];
    var libros = JSON.parse(localStorage.getItem("libros"));
    console.log(libros);
    var existe = true;
    for (var i=0; i< libros.length; i++) {
        if (libros[i].ISBN.includes(formulario['isbn'])){
            return alert("Este libro ya existe");
        }else{
            existe = false;
            
        }
    }
    if(!existe){
        var nuevoLibro = JSON.stringify(libros);
        nuevoLibro = nuevoLibro.replace(']', ',{"id":8,"ISBN":"56849204-6","titulo":"Mio Cid","autor":"Per Abbat","editorial":"galaxia","cantidad":5,"precio":5.65,"url":"IMG/El-Cantar-mio-Cid.jpg","descripcion":"Narra las aventuras del heroe español Mio Cid"}]');
        console.log(nuevoLibro);
        localStorage.setItem("libros", nuevoLibro);
        return alert("Completado");
    }else{
        return alert("Ha surgido un error inesperado");
    }
}