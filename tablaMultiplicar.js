const num = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar"), 10);
if (isNaN(num)) {
  console.log("Por favor ingresa un número válido.");
} else {
  console.log("Tabla de multiplicar:");
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}