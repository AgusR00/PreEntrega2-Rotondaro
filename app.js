class Contacto {
    constructor(nombre, numero) {
        this.nombre = nombre;
        this.numero = numero;
    }
}

let contactos = []


/* ---------------------------- A G R E G A    U N    C O N T A C T O --------------------- */


function agregar() {
    const nombre = prompt('Cual es el nombre de tu contacto?')

    if (contactos.some(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase())) {
        alert('Este contacto ya se ha añadido')
        return
    }


    if (!nombre || nombre === ' ') {
        alert('Los datos ingresados no son válidos')
        return
    }

    const numero = prompt('Cual es el número de tu contacto?')

    if (isNaN(Number(numero)) || numero.length < 10) {
        alert('Los datos ingresados no son válidos')
        return
    }

    contactos.push(new Contacto(nombre, numero))

    alert(`Agregaste el contacto ${nombre} con el número ${numero}`)
}


/* ---------------------------- B U S C A    U N    C O N T A C T O --------------------- */


function buscar() {
    const nombreBuscado = prompt('Ingresa el nombre del contacto que querés buscar');
    const contactoEncontrado = contactos.find(contacto => contacto.nombre.toLowerCase() === nombreBuscado.toLowerCase())

    if (contactoEncontrado) {
        alert(`Su contacto encontrado es ${contactoEncontrado.nombre} con el número ${contactoEncontrado.numero}`)
    } else {
        alert('Contacto no encontrado')
    }
}


/* ---------------------------- E L I M I N A    U N    C O N T A C T O --------------------- */


function eliminar() {
    const contactoAEliminar = prompt('Qué contacto querés eliminar?')
    const contactoEncontrado = contactos.find(contacto => contacto.nombre.toLowerCase() === contactoAEliminar.toLowerCase())

    if (contactoEncontrado) {
        contactos = contactos.filter(contacto => contacto.nombre != contactoEncontrado.nombre)

        alert(`Su contacto ${contactoEncontrado.nombre} con el número ${contactoEncontrado.numero} fue eliminado con éxito`)
    } else {
        alert('Contacto no encontrado')
    }
}

/* ---------------------------- M U E S T R A   L A   L I S T A    D E    C O N T A C T O S --------------------- */

function mostrar() {
    alert('Tu lista de contactos es la siguiente: \n' + contactos.map(contacto => contacto.nombre + ' ' + contacto.numero).join('\n'))
}


/* ----------------------------    M E N U   --------------------------- */

function menu() {
    let opcion;

    do {
        opcion = prompt(
            "Seleccioná una opción:\n1. Agregar Contacto\n2. Buscar contacto\n3. Eliminar contacto\n4. Mostrar lista de contactos\n5. Salir del menú"
        );

        switch (opcion) {
            case "1":
                agregar();
                break;
            case "2":
                buscar();
                break;
            case "3":
                eliminar()
                break;
            case "4":
                mostrar();
                break;
            case "5":
                alert("Saliste de la lista :)");
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    } while (opcion !== "5");
}

menu();
