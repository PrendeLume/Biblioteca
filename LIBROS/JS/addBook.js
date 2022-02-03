
function addBook(){

    var formulario = document.forms['alta'];
    var libros = datos.libros;

    for (var i=0; i< libros.length; i++) {
        if (libros[i].titulo.includes(formulario)){
            return alert("Este libro ya existe");
        }else{
           // libros.push(formulario.value);
            localStorage.setItem("libro","{id:" + (libros.length+1) + "}");
        }
    }
    
    console.log("hola " + formulario);


}