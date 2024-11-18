// 1) Crea una clase base llamada Empleado con las propiedades nombre, edad y salario.
export class Empleado {
    constructor(nombre, edad, salario){
        this._nombre = nombre;
        this._edad = edad;
        this._salario = salario;
    }

    // Getters y Setters
     // Métodos para acceder y modificar las propiedades
     getNombre() {
        return this._nombre;
    }

    setNombre(nombre) {
        this._nombre = nombre;
    }

    getEdad() {
        return this._edad;
    }

    setEdad(edad) {
        this._edad = edad;
    }

    getSalario() {
        return this._salario;
    }

    setSalario(salario) {
        this._salario = salario;
    }

    // Método para mostrar la información del empleado
    mostrarInformacion() {
        console.log(`Nombre: ${this._nombre}, Edad: ${this._edad}, Salario: ${this._salario}`);
    }

    // 2) Añade un método estático llamado calcularSalarioPromedio que reciba un número indeterminado de objetos Empleado y devuelva el salario promedio de los empleados.
    // ¿Qué es un método estático? 
    // Un método estático en JavaScript es un método que pertenece a la clase en sí misma, en lugar de a las instancias de la clase.

    // Método estático para calcular el salario promedio
    static calcularSalarioPromedio(...empleados) { // ...empleados es el operador de propagación (spread operator) que permite a la función aceptar un número indeterminado de argumentos y los agrupa en un array llamado empleados
        if (empleados.length === 0) { // verifica si no se ha pasado ningún empleado.
            return 0;
        }
        
        // Explicación reduce:
        // El método reduce en JavaScript es una función que se utiliza para "reducir" un array a un único valor, aplicando una función a cada elemento del array de forma acumulativa. Esta función toma dos argumentos: un acumulador y el valor actual del array, y el resultado de cada iteración se pasa al siguiente paso de la acumulación

        // Versión arrow function
        // let totalSalario = empleados.reduce((total, empleado) => total + empleado.getSalario(), 0);
        let totalSalario = empleados.reduce(function(total, empleado) {
            return total + empleado.getSalario();
        }, 0);

        return totalSalario / empleados.length; // saca el promedio, ya que reduce está sumando todos los empleados, pues entonces los divide en el total de empleados del array. 
    }
}

// 3) Crea una clase Gerente que herede de Empleado, y añade la propiedad adicional departamento.
export class Gerente extends Empleado {
    constructor(nombre, edad, salario, departamento){
        super (nombre,edad,salario);
        this._departamento = departamento;
    }

    // Método específico para mostrar la información del gerente
    mostrarInformacionGerente() {
        this.mostrarInformacion(); // Llamamos al método de la clase padre
        console.log(`Departamento: ${this.departamento}`);
    }
}
