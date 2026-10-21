function probarAtributos(){
    let persona={
        nombre: "Domenica",
        apellido:"Pugo",
        edad: 17,
        estaVivo:true
    }
    console.log(persona.nombre)
    console.log(persona.edad)
    if (persona.estaVivo==false){
        console.log("No esta viva");
    }else{
        console.log("Esta viva");
    }
}

function modificarAtributo(){
    let cuenta={
        numero:"2135489621",
        saldos:0.0
    }
    console.log(cuenta.saldos);
    cuenta.saldos= 100;
    console.log(cuenta.saldos);
    cuenta.saldos+=10;
    console.log(cuenta.saldos);
}

crearCliente= function(){
    let cliente={
        cedula:"6458912350",
        nombre:"pepito"
    }
    let cliente1 = {}
    cliente1.nombre="Ramiro";
    cliente1.apellido="Villa";
    cliente1.cedula="1246589741";
}

function probarIncrementarSaldo(){
    let cuenta = {
        numero:"01324567895",
        saldos:34.0
    }
    incrementarSaldo(cuenta,100);
    console.log(cuenta.saldos);
}

function incrementarSaldo(cuenta,monto){
    cuenta.saldos += monto;

}

function probarDeterminarMayor(){
    let persona1 = {
        nombre: "Daniel",
        edad: 45
    }
    let persona2 = {
        nombre: "Alfredo",
        edad: 48
    }
    let mayor;
    mayor=determinarMayor(persona1,persona2);
    if (mayor!=null){
        console.log("El mayor es:"+ mayor.nombre)
    }

}

function determinarMayor(persona1,persona2){
    if (persona1.edad>persona2.edad){
        return persona1;
    }else if (persona1.edad<persona2.edad){
        return persona2;
    }else{
        return null;
    }
}