const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, insira o raio da esfera: ', (raio) => {

  raio = parseFloat(raio);

  if (isNaN(raio) || raio < 0) {
    console.log('Por favor, insira um valor numérico válido e não negativo.');
  } else {

    const area = 4 * Math.PI * Math.pow(raio, 2);

    console.log(`A área da esfera é ${area.toFixed(2)} unidades quadradas.`);
  }

  rl.close();
});
