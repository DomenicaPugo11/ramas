let canvas=document.getElementById("areaDibujo");
let ctx=canvas.getContext("2d");

function dibujarRectangulo(){
    ctx.fillStyle="#c44b18";
    ctx.fillRect(0,0,canvas.width,canvas.height/2);
}