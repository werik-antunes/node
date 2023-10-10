const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira o número de lados do polígono regular: ', (lados) => {
    rl.question('Agora, insira o comprimento dos lados do polígono regular: ', (lado) => {

        lados = parseFloat(lados);
        lado = parseFloat(lado);

        if (isNaN(lados) || isNaN(lado)) {
            console.log('Por favor, insira valores numéricos válidos.');
        } else {

            const area = (lados * Math.pow(lado, 2)) / (4 * Math.tan(Math.PI / lados));

            console.log(`A área do polígono regular é ${area} unidades quadradas.`);
        }

        rl.close();
    });
});
