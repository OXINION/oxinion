export function calculateMidPoint(pointA, pointB) {
  if (
    !Array.isArray(pointA) ||
    !Array.isArray(pointB) ||
    pointA.length !== 2 ||
    pointB.length !== 2
  ) {
    throw new Error("Invalid input. Please provide two valid points.");
  }

  const x1 = pointA[0];
  const y1 = pointA[1];
  const x2 = pointB[0];
  const y2 = pointB[1];

  const midPointX = (x1 + x2) / 2;
  const midPointY = (y1 + y2) / 2;

  return [midPointX, midPointY];
}

export function createRandomPoint() {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;

  return [randomX, randomY];
}
