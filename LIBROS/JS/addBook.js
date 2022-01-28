
function addBook(){

    var formulario = document.forms['alta']['titulo'].value;
    var libros = datos.libros;

    for (var i=0; i< libros.length; i++) {
        if (libros[i].titulo.includes(formulario)){
            return alert("Este libro ya existe");
        }else{
            localStorage.setItem("libro",formulario);
        }
    }
    
    console.log("hola " + formulario);


}