const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaSuperficieLateral(raio, lado) {
  return Math.PI * raio * lado;
}

function calcularAreaTotal(raio, lado) {
  const areaBase = Math.PI * Math.pow(raio, 2);
  const areaLateral = calcularAreaSuperficieLateral(raio, lado);
  return areaBase + areaLateral;
}

rl.question('Por favor, insira o raio da base do cone: ', (raio) => {
  rl.question('Agora, insira a altura do cone: ', (altura) => {

    raio = parseFloat(raio);
    altura = parseFloat(altura);

    if (isNaN(raio) || isNaN(altura) || raio < 0 || altura < 0) {
      console.log('Por favor, insira valores numéricos válidos e não negativos.');
    } else {

      const lado = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
      const areaSuperficieLateral = calcularAreaSuperficieLateral(raio, lado);
      const areaTotal = calcularAreaTotal(raio, lado);

      console.log(`A área da superfície lateral do cone é ${areaSuperficieLateral.toFixed(2)} unidades quadradas.`);
      console.log(`A área total do cone é ${areaTotal.toFixed(2)} unidades quadradas.`);
    }

    rl.close();
  });
});
