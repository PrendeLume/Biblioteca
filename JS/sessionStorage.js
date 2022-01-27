
window.onload = function () {
    if (sessionStorage.length != 0) {
        document.getElementById("sesion").remove();
        document.getElementById("botonSesion").innerHTML = sessionStorage.getItem("nombre_usuario");

        /* creacion del boton busqueda */
        var li = document.createElement("li");
        li.setAttribute("class", "enlinea");
        var a = document.createElement("a");
        a.setAttribute("href", "LIBROS/Buscador.html");
        a.innerHTML = "Buscador";
        li.appendChild(a);

        document.getElementById("menuInicio").appendChild(li);
    } else {
        document.getElementById("cerrarSesion").remove();
    }
    console.log((new Date().getTime()));
    if (sessionStorage.getItem('Expiracion') == (new Date().getTime())) {
        sessionStorage.clear();
    }

    document.getElementById("cerrarSesion").addEventListener("click", function () {
        sessionStorage.clear();
    })
}();


function comprobarCredenciales() {
    //Obtenemos los datos del usuarios
    var usuario = document.forms["form"]["usuario"].value;
    var contraseña = document.forms["form"]["contraseña"].value

    //Comprobamos si el usuario existe
    var usuarioCorrecto = datos.usuarios.find(
        function (x) {
            return x.nombre === usuario;
        }
    )

    var contraseñaCorrecto = datos.usuarios.find(
        function (x) {
            return x.contraseña === contraseña;
        }
    )
    //Comprobamos si la contraseña es correcta y la guardamos en el sesionStorage
    var date = new Date;
    if (usuarioCorrecto && contraseñaCorrecto) {
        console.log("Llego");
        sessionStorage.setItem("nombre_usuario", usuarioCorrecto.nombre);
        sessionStorage.setItem("contraseña_usuario", usuarioCorrecto.contraseña);
        sessionStorage.setItem("Conexion", date.getTime());
        sessionStorage.setItem("Expiracion", date.getTime() + 300000);

    } else {
        return false;
    }

}