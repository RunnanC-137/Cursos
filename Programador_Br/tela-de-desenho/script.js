const tela1 = document.querySelector("#tela-1")
const ctx = tela1.getContext("2d")

let inicio = 0
let fim = 2 * Math.PI

ctx.lineWidth = 4;

ctx.beginPath()
ctx.moveTo(150, 150);
ctx.lineTo(150, 50);
ctx.lineTo(200,150)
ctx.lineTo(300,150)
ctx.stroke();

ctx.beginPath()

ctx.moveTo(250, 250);
ctx.lineTo(300,300)
ctx.stroke();

ctx.beginPath()

ctx.moveTo(250, 250);
ctx.lineTo(200,300);
ctx.stroke();

ctx.beginPath()

ctx.moveTo(250, 150);
ctx.lineTo(250, 135);
ctx.stroke();



ctx.beginPath()

ctx.arc(250, 115, 20, inicio, fim)
ctx.stroke();

ctx.beginPath()

ctx.lineWidth = 2;
ctx.strokeRect(253, 106, 10, 10)
ctx.strokeRect(237, 106, 10, 10)
ctx.stroke();
