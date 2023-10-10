const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, insira a base maior do trapézio: ', (baseMaior) => {
  rl.question('Agora, insira a base menor do trapézio: ', (baseMenor) => {
    rl.question('Por fim, insira a altura do trapézio: ', (altura) => {
      // Converte as entradas do usuário para números
      baseMaior = parseFloat(baseMaior);
      baseMenor = parseFloat(baseMenor);
      altura = parseFloat(altura);

      // Verifica se as entradas são válidas
      if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
        console.log('Por favor, insira valores numéricos válidos.');
      } else {
        // Calcula a área do trapézio
        const area = ((baseMaior + baseMenor) * altura) / 2;

        // Exibe o resultado
        console.log(`A área do trapézio é ${area} unidades quadradas.`);
      }

      rl.close();
    });
  });
});
