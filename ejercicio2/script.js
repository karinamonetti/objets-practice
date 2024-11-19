// 1) Crea una clase base llamada Libro con las propiedades titulo, autor, añoPublicacion y precio.
export class Libro {
  constructor(titulo, autor, añoPublicacion, precio) {
    this._titulo = titulo;
    this._autor = autor;
    this._añoPublicacion = añoPublicacion;
    this._precio = precio;
  }

  // Getter y Setter para el título
  get titulo() {
    return this._titulo;
  }

  set titulo(valor) {
    this._titulo = valor;
  }

  // Getter y Setter para el autor
  get autor() {
    return this._autor;
  }

  set autor(valor) {
    this._autor = valor;
  }

  // Getter y Setter para el año de publicación
  get añoPublicacion() {
    return this._añoPublicacion;
  }

  set añoPublicacion(valor) {
    this._añoPublicacion = valor;
  }

  // Getter y Setter para el precio
  get precio() {
    return this._precio;
  }

  set precio(valor) {
    this._precio = valor;
  }

  mostrarInformacion() {
    console.log(
      `Título: ${this._titulo}, Autor: ${this._autor}, Año de publicación: ${this._añoPublicacion}, Precio: ${this._precio}`
    );
  }

  // 2) Añade un método estático calcularTotalPrecio que reciba un número indeterminado de objetos Libro y devuelva el precio total de todos los libros.
  static calcularTotalPrecio(...libros) {
    if (libros.length === 0) {
      return 0;
    }
    let precioTotal = libros.reduce(function (total, libro) {
      return total + libro.precio;
    }, 0);
    return precioTotal / libros.length;
  }

  // 6) Crea en Libro otro método estático devuelveLibrosAutor que reciba un número indeterminado de libros y un autor y devuelva un array con los libros escritos por un autor específico ordenados por fecha de publicación.
  static devuelveLibrosAutor(autor, ...libros) {
    let librosEscritos = []; // Creo el Array
    libros.forEach(function (libro) {
      if (libro.autor === `${autor.nombre} ${autor.apellido}`) {
        librosEscritos.push(libro);
      }
    });
    // Ordenar los libros por fecha de publicación
    librosEscritos.sort(function (a, b) {
      // a.añoPublicacion es el año de publicación del libro a
      // b.añoPublicacion es el año de publicación del libro b
      return a.añoPublicacion - b.añoPublicacion;
      // Si a.añoPublicacion es menor que b.añoPublicacion, devolverá un valor negativo y a irá antes que b
      // Si a.añoPublicacion es mayor que b.añoPublicacion, devolverá un valor positivo y a irá después que b
      // Si son iguales, devolverá 0 y su orden relativo no cambiará
    });
    return librosEscritos; // devuelvo el Array con las obras del autor ordenadas por fecha.
  }
}

// 3) Crea una clase Ebook que herede de Libro y añada la propiedad adicional formato (por ejemplo, "PDF", "EPUB")
export class Ebook extends Libro {
  constructor(titulo, autor, añoPublicacion, precio, formato) {
    super(titulo, autor, añoPublicacion, precio);
    this._formato = formato;
  }

  get formato() {
    return this._formato;
  }

  set formato(formato) {
    this._formato = formato;
  }
  mostrarInformacionEbook() {
    this.mostrarInformacion(); // Llamamos al método de la clase padre
    console.log(`Formato: ${this._formato}`);
  }
}

// 4) Crea otra clase llamada Autor que tenga como propiedades el nombre, el apellido, el año de nacimiento y un array con todas su obras, que inicialmente se encontrará vacío.
export class Autor {
  constructor(nombre, apellido, añoNacimiento) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._añoNacimiento = añoNacimiento;
    this._obras = [];
  }

  // Getter y Setter para el nombre
  get nombre() {
    return this._nombre;
  }

  set nombre(valor) {
    this._nombre = valor;
  }

  // Getter y Setter para el apellido
  get apellido() {
    return this._apellido;
  }

  set apellido(valor) {
    this._apellido = valor;
  }

  // Getter y Setter para el año de nacimiento
  get añoNacimiento() {
    return this._añoNacimiento;
  }

  set añoNacimiento(valor) {
    this._añoNacimiento = valor;
  }

  // Getter y Setter para las obras
  get obras() {
    return this._obras;
  }

  set obras(valor) {
    this._obras = valor;
  }

  // Función para mostrar las propiedades
  mostrarInformacion() {
    console.log(`Nombre: ${this._nombre} ${this._apellido}`);
    console.log(`Año de nacimiento: ${this._añoNacimiento}`);
    console.log(`Obras: ${this._obras.join(", ")}`);
  }

  // 5) Crea en Autor un método que recibiendo un array con libros compruebe que no los tiene entre sus libros y en tal caso los añada.
  agregarObras(libros) {
    libros.forEach((libro) => {
      if (
        libro.autor === `${this._nombre} ${this._apellido}` &&
        !this._obras.includes(libro.titulo)
      ) {
        this._obras.push(libro.titulo); // Añadir el título del libro a las obras del autor
        // La expresión !this._obras.includes(libro.titulo) verifica si el libro no está ya en la lista de obras del autor.
      }
    });
  }
}




