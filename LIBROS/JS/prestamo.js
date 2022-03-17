
function comprobar() {

    var formulario = document.forms['prestamo'].elements;
    var libros = JSON.parse(localStorage.getItem('libros'));
    var socios = JSON.parse(localStorage.getItem('socios'));
    var existe = false;
    console.warn("dentro");
    for (let i = 0; i < libros.length; i++) {
        if (formulario.isbn.value == libros[i].ISBN) {
            formulario.titulo.value = libros[i].titulo;
            existe = true;
            break;
        }

    }
    if (existe == false) {
        alert("NO existe el libro");
        return false;
    }

    existe = false;

    for (let i = 0; i < socios.length; i++) {

        if (formulario.dni.value == socios[i].DNI) {
            formulario.nombre.value = socios[i].nombre;
            formulario.apellido.value = socios[i].apellido;
            formulario.codigo.value = socios[i].codigo;
            existe = true;
            break;
        }

    }
    if (existe == false) {
        alert("NO existe el cliente");
        return false;
    }



}

function addPrestamo(){
    var formulario = document.forms['prestamo'].elements;
    if(localStorage.getItem("prestamos") != undefined){
        
        var prestamos = JSON.parse(localStorage.getItem("prestamos"));
        console.warn(prestamos);
        var newPrestamo = {
            idPrestamo: prestamos.length,
            ISBN: formulario.isbn.value,
            DNI: formulario.dni.value
        };
        prestamos.push(newPrestamo);
        localStorage.setItem("prestamos", JSON.stringify(prestamos));
    }else{

        var newPrestamo = [{
            idPrestamo: 0,
            ISBN: formulario.isbn.value,
            DNI: formulario.dni.value
        }];
        localStorage.setItem("prestamos", JSON.stringify(newPrestamo));
    }
}
