
function comprobar() {

    var formulario = document.forms['devolucion'].elements;
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
            existe = true;
            break;
        }

    }
    if (existe == false) {
        alert("NO existe el cliente");
        return false;
    }



}

function devolver() {
    var formulario = document.forms['devolucion'].elements;
    console.warn(JSON.parse(localStorage.getItem("prestamos")).length);
    if (localStorage.getItem("prestamos") != undefined && JSON.parse(localStorage.getItem("prestamos")).length != 0) {

        var prestamos = JSON.parse(localStorage.getItem("prestamos"));


        for (let i = 0; i < prestamos.length; i++) {
            if (formulario.isbn.value == prestamos[i].ISBN && formulario.dni.value == prestamos[i].DNI) {
                prestamos.splice(i, 1);
                console.warn(prestamos);
                alert("Se ha eliminado correctamente");
                break;
            }
        }
        localStorage.setItem("prestamos", JSON.stringify(prestamos));
        return true;
    } else {
        
        alert("No hai prestamos");
        return false;
    }
}
