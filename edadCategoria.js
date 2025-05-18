const edad = parseInt(prompt("¿Cuál es tu edad?"), 10);
let texto;
if (isNaN(edad) || edad < 0) {
  texto = "Edad no válida";
} else if (edad <= 12) {
  texto = "Niño";
} else if (edad <= 17) {
  texto = "Adolescente";
} else if (edad <= 59) {
  texto = "Adulto";
} else {
  texto = "Adulto mayor";
}
console.log("Clasificación por edad:");
console.log(`Tu categoría: ${texto}`);