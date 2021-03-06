
window.onload = function () {
    if (sessionStorage.length != 0) {
        document.getElementById("sesion").remove();
        document.getElementById("botonSesion").innerHTML = sessionStorage.getItem("nombre_usuario");

        /* creacion del boton busqueda */
        //Libros
        var li = document.createElement("li");
        li.setAttribute("class", "enlinea");
        var a = document.createElement("a");
        console.log(window.location.href);
        if (window.location.href.includes("LIBROS")) {
            a.setAttribute("href", "libros.html");
        } else if (window.location.href.includes("SOCIOS")) {
            a.setAttribute("href", "../LIBROS/libros.html");
        } else {

            a.setAttribute("href", "LIBROS/libros.html");
        }
        a.innerHTML = "Libros";
        li.appendChild(a);

        document.getElementById("menuInicio").appendChild(li);
        //Socios
        var li = document.createElement("li");
        li.setAttribute("class", "enlinea");
        var a = document.createElement("a");
        if (window.location.href.includes("LIBROS")) {
            a.setAttribute("href", "../SOCIOS/socios.html");
        } else if (window.location.href.includes("SOCIOS")) {
            a.setAttribute("href", "socios.html");
        } else {

            a.setAttribute("href", "SOCIOS/socios.html");
        }
        a.innerHTML = "Socios";
        li.appendChild(a);

        document.getElementById("menuInicio").appendChild(li);
        //Prestamo
        var li = document.createElement("li");
        li.setAttribute("class", "enlinea");
        li.setAttribute("id", "addLibro");
        var a = document.createElement("a");
        if (window.location.href.includes("LIBROS")) {
            a.setAttribute("href", "prestamo.html");
        } else if (window.location.href.includes("SOCIOS")) {
            a.setAttribute("href", "../LIBROS/prestamo.html");
        } else {

            a.setAttribute("href", "LIBROS/prestamo.html");
        }
        a.innerHTML = "Prestamo";
        li.appendChild(a);

        document.getElementById("menuInicio").appendChild(li);
        //Devolucion
        var li = document.createElement("li");
        li.setAttribute("class", "enlinea");

        li.setAttribute("id", "addSocio");
        var a = document.createElement("a");
        if (window.location.href.includes("LIBROS")) {
            a.setAttribute("href", "../SOCIOS/devolucion.html");
        } else if (window.location.href.includes("SOCIOS")) {
            a.setAttribute("href", "devolucion.html");
        } else {

            a.setAttribute("href", "SOCIOS/devolucion.html");
        }
        a.innerHTML = "Devolucion";
        li.appendChild(a);

        document.getElementById("menuInicio").appendChild(li);

    } else {
        document.getElementById("cerrarSesion").remove();

    }
    if (sessionStorage.getItem('Expiracion') == (new Date().getTime())) {
        sessionStorage.clear();
    }

    document.getElementById("cerrarSesion").addEventListener("click", function () {
        sessionStorage.clear();
        localStorage.clear();

    });
}();


function comprobarCredenciales() {
    //Obtenemos los datos del usuarios
    var usuario = document.forms["form"]["usuario"].value;
    var contrase??a = document.forms["form"]["contrase??a"].value

    //Comprobamos si el usuario existe
    var usuarioCorrecto = datos.usuarios.find(
        function (x) {
            return x.nombre === usuario;
        }
    )

    var contrase??aCorrecto = datos.usuarios.find(
        function (x) {
            return x.contrase??a === contrase??a;
        }
    )
    //Comprobamos si la contrase??a es correcta y la guardamos en el sesionStorage
    var date = new Date;
    if (usuarioCorrecto && contrase??aCorrecto) {
        sessionStorage.setItem("nombre_usuario", usuarioCorrecto.nombre);
        sessionStorage.setItem("contrase??a_usuario", usuarioCorrecto.contrase??a);
        sessionStorage.setItem("Conexion", date.getTime());
        sessionStorage.setItem("Expiracion", date.getTime() + 300000);

        localStorage.setItem("libros", JSON.stringify(datos.libros));
        localStorage.setItem("socios", JSON.stringify(datos.socios));
    } else {
        alert("El usuario o la contrase??a incorrectas");
        return false;
    }

}
