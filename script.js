function solicitarNumero() {
    let numero;
    while (true) {
      let entrada = prompt("Ingresa un número entero para calcular su factorial:");

      if (entrada === null) {
        alert("Operación cancelada.");
        return null;
      }

      numero = Number(entrada);

      if (!isNaN(numero) && Number.isInteger(numero)) {
        break;
      } else {
        alert("Por favor ingresa un número entero válido.");
      }
    }
    return numero;
  }

  function calcularFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    let factorial = 1;

    // Si es negativo, devolver 'No existe'
    if (num < 0) {
      return "No existe el factorial de un número negativo";
    }

    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }

  function mostrarResultado(resultado) {
    document.getElementById("resultado").innerHTML = `<p>El factorial es:${resultado}</p>`;
  }

  // Ejecutamos el programa
  let numero = solicitarNumero();
  if (numero !== null) {
    let factorial = calcularFactorial(numero);
    mostrarResultado(factorial);
}