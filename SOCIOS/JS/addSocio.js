var i= 4;
function addBook(){
    
    var formulario = document.alta;
    var socios = JSON.parse(localStorage.getItem("socios"));
    console.log(formulario);
    var existe = true;
    for (var i=0; i< socios.length; i++) {
        if (socios[i].DNI.includes(formulario.dni.value)){
            return alert("Este socio ya existe");
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
function addSocio(){

    var formulario = document.forms["alta"].elements;
    console.warn("form", formulario);

    var socios = JSON.parse(localStorage.getItem("socios"));
    
    for (var i=0; i< socios.length; i++) {
        if (socios[i].DNI.includes(formulario.dni.value)){
            alert("Este socio ya existe");
            return false;
        }
    }

    var nuevoSocio = {
            id: socios.length,
            DNI: formulario.dni.value,
            codigo: formulario.codigo.value,
            nombre: formulario.nombre.value,
            apellido: formulario.apellido.value,
            direccion: formulario.direccion.value,
            telefono: formulario.telefono.value,
            url: "IMG/1361728.png"
        };
        socios.push(nuevoSocio);

    
    localStorage.setItem("socios", JSON.stringify(socios));
    alert("Completado");
    return true;
}
window.onload = modificar;
function modificar(){
    var socioModificar = localStorage.getItem("socioModificar");
    if(socioModificar != undefined){

        var formulario = document.forms["alta"].elements;
        var socios = JSON.parse(localStorage.getItem("socios"));
        console.warn(socios);
        formulario.direccion.value = socios[socioModificar].direccion;
        formulario.telefono.value = socios[socioModificar].telefono;
        formulario.codigo.value = socios[socioModificar].codigo;
        formulario.dni.value = socios[socioModificar].DNI;
        formulario.nombre.value = socios[socioModificar].nombre;
        formulario.apellido.value = socios[socioModificar].apellido;
        
    }
    
}

function modificarSocio2(){
    
    var formulario = document.forms["alta"].elements;
    console.warn("form", formulario);
    
    var socios = JSON.parse(localStorage.getItem("socios"));
    
    var socioModificar = localStorage.getItem("socioModificar");
    socios.splice(socioModificar, 1);
    var nuevoSocio = {
        id: socios.length,
        DNI: formulario.dni.value,
        codigo: formulario.codigo.value,
        nombre: formulario.nombre.value,
        apellido: formulario.apellido.value,
        direccion: formulario.direccion.value,
        telefono: formulario.telefono.value,
        url: "IMG/1361728.png"
    };
    socios.push(nuevoSocio);


localStorage.setItem("socios", JSON.stringify(socios));
alert("Completado");

localStorage.removeItem("socioModificar");
return true;
}