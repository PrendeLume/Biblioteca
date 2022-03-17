var i= 4;
function addBook(){
    
    var formulario = document.alta;
    var socios = JSON.parse(localStorage.getItem("socios"));
    console.log(formulario);
    var existe = true;
    for (var i=0; i< socios.length; i++) {
        if (socios[i].DNI.includes(formulario.dni.value)){
            return alert("Este libro ya existe");
        }else{
            existe = false;
            
        }
    }
    if(!existe){
        var nuevoLibro = JSON.stringify(socios);
        nuevoLibro = nuevoLibro.replace(']', ',{"id":'+(++i)+',"DNI":"'+formulario.dni.value+'","nombre":"'+formulario.nombre.value+'","apellido":"'+formulario.apellido.value+'","url":"IMG/El-Cantar-mio-Cid.jpg"}]');
        console.log(nuevoLibro);
        localStorage.setItem("socios", nuevoLibro);
        return alert("Completado");
    }else{
        return alert("Ha surgido un error inesperado");
    }
}

window.onload = modificar;
function modificar(){
    var socioModificar = localStorage.getItem("socioModificar");
    if(socioModificar != undefined){

        var formulario = document.forms["modificar"].elements;
        var socios = JSON.parse(localStorage.getItem("socios"));
        console.warn(socios);
        formulario.dni.value = socios[socioModificar].DNI;
        formulario.nombre.value = socios[socioModificar].nombre;
        formulario.apellido.value = socios[socioModificar].apellido;
    }
   
}