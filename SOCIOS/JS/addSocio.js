
function addBook(){

    var formulario = document.forms['alta'];
    var libros = datos.libros;

    for (var i=0; i< libros.length; i++) {
        if (libros[i].titulo.includes(formulario)){
            return alert("Este libro ya existe");
        }else{
            var librosLocal = localStorage.getItem("libros");
            librosLocal.push("libro","{id:" + (libros.length+1) + "}");
            console.log(librosLocal);
            //"libro","{id:" + (libros.length+1) + "}"
            localStorage.setItem(librosLocal);
        }
    }
    
    console.log("hola " + formulario);


}