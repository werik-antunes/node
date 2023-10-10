const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira a área da base do prisma (por exemplo, área do retângulo): ', (areaBase) => {
    rl.question('Agora, insira a altura total do prisma: ', (alturaTotal) => {

        areaBase = parseFloat(areaBase);
        alturaTotal = parseFloat(alturaTotal);

        if (isNaN(areaBase) || isNaN(alturaTotal) || areaBase < 0 || alturaTotal < 0) {
            console.log('Por favor, insira valores numéricos válidos e não negativos.');
        } else {

            const areaTotal = 2 * areaBase + (areaBase * 2) * alturaTotal;

            console.log(`A área total do prisma é ${areaTotal.toFixed(2)} unidades quadradas.`);
        }
        rl.close();
    });
});
