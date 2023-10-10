const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, insira a largura do retângulo: ', (largura) => {
  rl.question('Agora, insira a altura do retângulo: ', (altura) => {

    largura = parseFloat(largura);
    altura = parseFloat(altura);


    if (isNaN(largura) || isNaN(altura)) {
      console.log('Por favor, insira valores numéricos válidos.');
    } else {

      const area = largura * altura;

      console.log(`A área do retângulo é ${area} unidades quadradas.`);
    }

    rl.close();
  });
});
