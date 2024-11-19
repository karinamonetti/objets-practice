// 6) Crea un archivo app.js en el que importes los JSs necesarios de las clases.
import {Libro, Ebook, Autor} from "./script.js"


// 7) Crea un autor y un array con 5 libros y 5 ebooks.
let libros = [
    new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, 20.99),
    new Libro("1984", "George Orwell", 1949, 15.49),
    new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605, 10.99),
    new Libro("El otoño del patriarca", "Gabriel García Márquez", 1975, 18.99),
    new Libro("Crónica de una muerte anunciada", "Gabriel García Márquez", 1981, 12.99),
    new Ebook("El Aleph", "Jorge Luis Borges", 1949, 9.99, "EPUB"),
    new Ebook("Rayuela", "Julio Cortázar", 1963, 12.99, "PDF"),
    new Ebook("Ficciones", "Jorge Luis Borges", 1944, 11.99, "MOBI"),
    new Ebook("La ciudad y los perros", "Mario Vargas Llosa", 1962, 10.99, "EPUB"),
    new Ebook("Cien años de soledad", "Gabriel García Márquez", 1967, 15.99, "PDF")
  ];
  
  let autor1 = new Autor("Gabriel", "García Márquez", 1927);
  
  // Mostrar las obras antes de añadir
  console.log(autor1.obras);
  // Añadir los libros de la lista al autor
  autor1.agregarObras(libros);
  // Mostrar las obras después de añadir
  console.log(autor1.obras);
  // Llamada correcta al método estático para obtener los libros de un autor
let librosDelAutor = Libro.devuelveLibrosAutor(autor1, ...libros);
console.log(librosDelAutor);

//8) Llama a la función de añadir libros en Autor que reciba como parámetro lo retornado por el método estático devuelveLibrosAutor, al que le pasaremos los libros del array y el autor.
console.log("Punto 8.");
autor1.agregarObras(librosDelAutor);
console.log(librosDelAutor);

// 9) Muestra por consola el autor
console.log(autor1.mostrarInformacion());


// 10) Llama a la función  calcularTotalPrecio pasandole los libros del array creado en el punto 8 y muestra su resultado en un alert.
let totalPrecio = Libro.calcularTotalPrecio(...libros); 
console.log(typeof totalPrecio);
alert(`El precio total de los libros es: $${totalPrecio.toFixed(2)}`);
