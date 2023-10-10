const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, insira o comprimento de um lado do quadrado: ', (lado) => {
  lado = parseFloat(lado);

  if (isNaN(lado)) {

    console.log('Por favor, insira um valor numérico válido.');

  } else {

    const area = lado * lado;

    console.log(`A área do quadrado é ${area} unidades quadradas.`);
  }

  rl.

    close();
});