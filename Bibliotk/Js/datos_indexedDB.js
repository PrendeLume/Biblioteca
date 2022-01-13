var datos = (function() {
	// Para trabajar con todos los navegadores
	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

	// FUNCION PUBLICA cargarDatos
	var cargarDatos = function() {
		
		// Abrimos o creamos una base de datos
		var open = indexedDB.open("Biblioteca", 1);

		// Creamos un schema
		open.onupgradeneeded = function() {
			open.result
				.createObjectStore("usuarios", {keyPath: "id"})
				.createIndex("credenciales", ["credenciales.usuario", "credenciales.contrasena"])
			;
			
			/* USUARIOS
					id
					nombre_completo { nombre, apellidos }
					credenciales { usuario, contrasena }
					tipo (0: adminnistrados, 1: normal) */
		};

		open.onsuccess = function() {
		/* Comenzamos la inserción */
			
			// BaseDatos
			var db = open.result;

			// Transacción
			var tx = db.transaction("usuarios", "readwrite");
			
			// Almacén
			var store = tx.objectStore("usuarios");

			// Añadimos los usuarios
			store.put({ id: 1, nombre_completo: { nombre: "José Ramón", apellidos: "Sanlés" }, credenciales: { usuario: "jose", contrasena: "abc123." }, tipo: 0 });
			
			store.put({ id: 2, nombre_completo: { nombre: "Marcos", apellidos: "Martínez" }, credenciales: { usuario: "marcos", contrasena: "abc123." }, tipo: 1 });

			// Cerramos la BD cuando la transacción es terminada
			tx.oncomplete = function() { db.close(); };
		};
	};


	/* FUNCION PRIVADA comprobarBD */
	var comprobarBD = function () {
		// Comprobaremos si existe la BD

		// Abrimos una base de datos
		var open = indexedDB.open("Biblioteca", 1);

		// Creamos un schema
		open.onupgradeneeded = function(event) {
			var db = open.result
				
			if (event.oldVersion == 0) { // El cliente no tiene base de datos
				db.close();
				indexedDB.deleteDatabase('Biblioteca');
				
				cargarDatos();
			}
		};

		open.onsuccess = function() { return; }
	}


	/* FUNCION PUBLICA getUsuario */
	var getUsuario = function(reqUsuario) {
		comprobarBD();

		async function getData() {
			let open = await indexedDB.open('Biblioteca', 1);
			let db = await open.result;
			let tx = db.transaction('usuarios', 'readonly');
			let store = tx.objectStore('usuarios');

			// add, clear, count, delete, get, getAll, getAllKeys, getKey, put
			let allSavedItems = await store.getAll()

			console.log(allSavedItems)

			db.close()
		};

		getData();
	};

	return { 
		cargarDatos: cargarDatos,
		getUsuario: getUsuario
	};
})();
