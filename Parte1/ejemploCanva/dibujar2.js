let canvas=document.getElementById("areaDibujo");
let ctxCuerpo=canvas.getContext("2d");

let ctxPie1=canvas.getContext("2d");
let ctxPie2=canvas.getContext("2d");
let ctxCuello=canvas.getContext("2d");
let ctxCabeza=canvas.getContext("2d");
let ctxOjo1=canvas.getContext("2d");
let ctxOjo2=canvas.getContext("2d");
let ctxBoca=canvas.getContext("2d");
let ctxBrazo1=canvas.getContext("2d");
let ctxBrazo2=canvas.getContext("2d");


function dibujarRectangulo(){
    ctxCuerpo.fillStyle="#c44b18";
    ctxCuerpo.fillRect(250,150,100,90);

    ctxPie1.fillStyle="#CF99A1";
    ctxPie1.fillRect(260,240,30,30);

    ctxPie2.fillStyle="#CF99A1";
    ctxPie2.fillRect(310,240,30,30);

    ctxCuello.fillStyle="#CF99A1";
    ctxCuello.fillRect(275,130,50,20);

    ctxCabeza.fillStyle="#400639";
    ctxCabeza.fillRect(250,60,100,70);

    ctxOjo1.fillStyle="#0a0a0b";
    ctxOjo1.fillRect(270,85,15,15);

    ctxOjo2.fillStyle="#0a0a0b";
    ctxOjo2.fillRect(310,85,15,15);

    ctxBoca.fillStyle="#0a0a0b";
    ctxBoca.fillRect(280,110,40,8);

    ctxBrazo1.fillStyle="#40060F";
    ctxBrazo1.fillRect(210,150,40,40);

    ctxBrazo2.fillStyle="#40060F";
    ctxBrazo2.fillRect(350,150,40,40);




}