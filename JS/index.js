//Creacion da base de datos
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

if(!window.indexedDB){
    console.log("El buscador no puede cargar el IndexedDB");
}

/*IIFE*/