import { Empleado, Gerente } from './script.js';


// 4) - Crea en este app.js un array con 4 empleados y otro con 2 gerentes.

let empleados = [
    new Empleado("Juan", 30, 50000),
    new Empleado("María", 25, 60000),
    new Empleado("Luis", 35, 55000),
    new Empleado("Pedro", 28, 52000)
];

let gerentes = [
    new Gerente("Ana", 40, 80000, "Ventas"),
    new Gerente("Carlos", 45, 90000, "Marketing")
];


// 5) Combina ambos mediante el operador spread.
let todos = [...empleados, ...gerentes];
// mostrarinfo de todos los elementos dentro de todos
// persona funciona como un i en un for
/*todos.forEach(persona => {
    persona.mostrarInformacion();
});*/

// 6) Llama al método estático para mostrar en un alert el salario promedio.
alert(`El salario promedio es: ${Empleado.calcularSalarioPromedio(...todos)}`);