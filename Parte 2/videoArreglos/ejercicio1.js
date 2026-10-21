let notas=[];

function agregarElementos(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

function probarAgregar(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

function agregarNota(nota){
    notas.push(nota);
    mostrarNotas();
}

function recorrerAreglo(){
    let notaR;
    for (indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}

function calcularPromedio(){
    recorrerAreglo();
    let sumaNotas=0;
    let promedio;
    let numRecuperar;
    for (let i=0;i<notas.length;i++){
        numRecuperar=notas[i];
        sumaNotas=sumaNotas+numRecuperar;
    }
    promedio=sumaNotas/notas.length;
    console.log("El promedio es: "+promedio);
}

function generarTabla(){
    let contenidoTabla="";
    let cmpTabla=
    contenidoTabla+="<table>"+
                    "<tr><th>UNO</th></tr>"+
                    "<tr><th>DOS</th></tr>"+
                    "</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

function mostrarNotas(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><td>NOTA</td></tr>";
    let miNota;
    for (let i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</td></tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}