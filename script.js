function mostrarPopup() {
    // Solicitar al usuario el ingreso del string
    var str = prompt("Ingrese un string con palabras separadas por coma:");
  
    // Convertir el string en un array
    var array = str.split(",");
  
    // Mostrar el resultado en la consola
    console.log("Array resultante:", array);
  }
  
