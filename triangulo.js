const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira a base do triângulo: ', (base) => {
    rl.question('Agora, insira a altura do triângulo: ', (altura) => {

        base = parseFloat(base);
        altura = parseFloat(altura);

        if (isNaN(base) || isNaN(altura)) {
            console.log('Por favor, insira valores numéricos válidos.');
        } else {

            const area = (base * altura) / 2;

            console.log(`A área do triângulo é ${area} unidades quadradas.`);
        }

        rl.close();
    });
});
