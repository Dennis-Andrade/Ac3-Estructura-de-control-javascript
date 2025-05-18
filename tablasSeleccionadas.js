const tipo = prompt("¿Quieres ver tablas de números 'par' o 'impar'?").toLowerCase();
if (tipo !== "par" && tipo !== "impar") {
  console.log("Opción no válida. Recarga y escribe 'par' o 'impar'.");
} else {
  console.log("Tablas seleccionadas:");
  const start = tipo === "par" ? 2 : 1;
  for (let n = start; n <= 10; n += 2) {
    console.log(`Tabla del ${n}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }
}
