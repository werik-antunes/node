const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateArea(vertices) {
  if (vertices.length < 3) {
    return 0;
  }

  const numPoints = 10000;
  let pointsInside = 0;

  for (let i = 0; i < numPoints; i++) {
    const randomX = Math.random();
    const randomY = Math.random();

    let isInside = false;

    for (let j = 0, k = vertices.length - 1; j < vertices.length; k = j++) {
      const xi = vertices[j][0];
      const yi = vertices[j][1];
      const xj = vertices[k][0];
      const yj = vertices[k][1];

      const intersect = ((yi > randomY) !== (yj > randomY)) &&
        (randomX < ((xj - xi) * (randomY - yi) / (yj - yi) + xi));

      if (intersect) {
        isInside = !isInside;
      }
    }

    if (isInside) {
      pointsInside++;
    }
  }

  const boundingBoxArea = calculateBoundingBoxArea(vertices);
  const estimatedArea = (pointsInside / numPoints) * boundingBoxArea;

  return estimatedArea;
}

function calculateBoundingBoxArea(vertices) {
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  for (const vertex of vertices) {
    const [x, y] = vertex;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }

  return (maxX - minX) * (maxY - minY);
}

rl.question('Digite o número de vértices do polígono: ', (numVertices) => {
  const vertices = [];

  function inputVertex(index) {
    rl.question(`Digite o x do vértice ${index}: `, (x) => {
      rl.question(`Digite o y do vértice ${index}: `, (y) => {
        vertices.push([parseFloat(x), parseFloat(y)]);

        if (vertices.length < numVertices) {
          inputVertex(vertices.length + 1);
        } else {
          const area = calculateArea(vertices);
          console.log(`A área do polígono é aproximadamente ${area.toFixed(2)} unidades quadradas.`);
          rl.close();
        }
      });
    });
  }

  inputVertex(1);
});
