const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularAreaSuperficieLateral(raio, altura) {
    return 2 * Math.PI * raio * altura;
}

function calcularAreaTotal(raio, altura) {
    const areaBase = Math.PI * Math.pow(raio, 2);
    const areaLateral = calcularAreaSuperficieLateral(raio, altura);
    return 2 * areaBase + areaLateral;
}

rl.question('Por favor, insira o raio da base do cilindro: ', (raio) => {
    rl.question('Agora, insira a altura do cilindro: ', (altura) => {

        raio = parseFloat(raio);
        altura = parseFloat(altura);

        if (isNaN(raio) || isNaN(altura) || raio < 0 || altura < 0) {
            console.log('Por favor, insira valores numéricos válidos e não negativos.');
        } else {

            const areaSuperficieLateral = calcularAreaSuperficieLateral(raio, altura);
            const areaTotal = calcularAreaTotal(raio, altura);

            console.log(`A área da superfície lateral do cilindro é ${areaSuperficieLateral.toFixed(2)} unidades quadradas.`);
            console.log(`A área total do cilindro é ${areaTotal.toFixed(2)} unidades quadradas.`);
        }

        rl.close();
    });
});
