
function addBook(){

    var formulario = document.forms['alta'];
    var socios = JSON.parse(localStorage.getItem("socios"));
    console.log(socios);
    var existe = true;
    for (var i=0; i< socios.length; i++) {
        if (socios[i].ISBN.includes(formulario['isbn'])){
            return alert("Este libro ya existe");
        }else{
            existe = false;
            
        }
    }
    if(!existe){
        var nuevoLibro = JSON.stringify(socios);
        nuevoLibro = nuevoLibro.replace(']', ',{"id":8,"DNI":"56849204-6","nombre":"Mio Cid","apellido":"Per Abbat","url":"IMG/El-Cantar-mio-Cid.jpg"}]');
        console.log(nuevoLibro);
        localStorage.setItem("socios", nuevoLibro);
        return alert("Completado");
    }else{
        return alert("Ha surgido un error inesperado");
    }
}