/*IIFE*/
var datos = (function () {
    return {
        usuarios: [
            { id: 1, nombre: 'Carlos', contraseña: '1234abc.' },
            { id: 2, nombre: 'Pepe', contraseña: '1234abc.' }
        ],
        
        libros: [
            { id: 1, ISBN: '56849204-6', titulo: 'Mio Cid', autor: 'Per Abbat', editorial: 'galaxia', cantidad: 5, precio: 5.65, url: 'IMG/ejemplo.jpg', descripcion: 'Narra las aventuras del heroe español Mio Cid'},
            { id: 2, ISBN: '56842334-6', titulo: 'Leyenda del tuerto', autor: 'Carlos', editorial: 'galaxia', cantidad: 3, precio: 7.00, url: 'IMG/ejemplo.jpg', descripcion: 'Cuenta la vida de un gran guerrero tuerto'},
            { id: 3, ISBN: '23842334-6', titulo: '50 sombras de Gray', autor: 'Pepito', editorial: 'galaxia', cantidad: 4, precio: 15.00, url: 'IMG/ejemplo.jpg', descripcion: 'Narra las aventuras sexuales de un millonario'},
            { id: 4, ISBN: '57542334-6', titulo: 'Hercules', autor: 'Desconocido', editorial: 'galaxia', cantidad: 8, precio: 4.00, url: 'IMG/ejemplo.jpg', descripcion: 'Cuenta las aventuras del hijo de zeus hercules'},
            { id: 5, ISBN: '51942334-6', titulo: 'Leyenda del thor', autor: 'Vikingos', editorial: 'galaxia', cantidad: 10, precio: 0.70, url: 'IMG/ejemplo.jpg', descripcion: 'Narra las grandes batallas llevadas a cabo por el hijo de Odin'},
            { id: 6, ISBN: '51942334-6', titulo: 'Una muerte anunciada', autor: 'Vikingos', editorial: 'galaxia', cantidad: 10, precio: 0.70, url: 'IMG/ejemplo.jpg', descripcion: 'Narra las grandes batallas llevadas a cabo por el hijo de Odin'},
            { id: 7, ISBN: '51942334-6', titulo: 'Como volar por el cielo', autor: 'Vikingos', editorial: 'galaxia', cantidad: 10, precio: 0.70, url: 'IMG/ejemplo.jpg', descripcion: 'Narra las grandes batallas llevadas a cabo por el hijo de Odin'},
            { id: 8, ISBN: '51942334-6', titulo: 'hajime no ippo', autor: 'Vikingos', editorial: 'galaxia', cantidad: 10, precio: 0.70, url: 'IMG/ejemplo.jpg', descripcion: 'Narra las grandes batallas llevadas a cabo por el hijo de Odin'}
        ]

    };
})();