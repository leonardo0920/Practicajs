var nombre = "Leonardo";
var apellidos = "Davila";
var usuarioPlatzi = "Leonardo0920";
var edad = 22;
var mayorEdad = true;
var ahorros = 180;
var deudas = null;

let fullName = '${nombre} ${apellido}';
let dinero = ahorros - deudas;

const miFuncion = (nombre, apellido, usuarioPlatzi) => {
    let fullName = '${nombre} ${apellido}';
    return 'Mi nombre es: ${fullName} pero prefieron que me digan ${usuarioPlatzi}';
}

console.log(miFuncion)