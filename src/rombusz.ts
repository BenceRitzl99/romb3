

function calcPerimeter(side: number): number {
    return side * 4;
}

function calcArea(side: number, alpha: number): number {
    const rad = alpha * Math.PI / 180;
    return Math.pow(side, 2) * Math.sin(rad);
}
export {calcPerimeter, calcArea};