let clientes = [
    {cedula:"1543268754", nombre:"Juan", edad:22},
    {cedula:"5135489630", nombre:"Mario", edad:50},
    {cedula:"5489632015", nombre:"Pepe", edad:22}
];

function agregarCliente(cliente){
    let resultado;
    resultado=buscarCliente(cliente.cedula)
    if (resultado==null){
        clientes.push(cliente);
        alert("Cliente agregado");
        mostrarClientes();
    }else{
        alert("Ya existe el cliente con la cedula:" + cliente.cedula);
    }
}

function guardarCambios(){
    let valorCedula=recuperaraTexto("txtCedula");
    let valorNombre=recuperaraTexto("txtNombre");
    let valorEdad=recuperarInt("txtEdad");
    let datoCliente= {};
    datoCliente.cedula=valorCedula;
    datoCliente.nombre=valorNombre;
    datoCliente.edad=valorEdad;
    modificarCliente(datoCliente);
    mostrarClientes();
}

function modificarCliente(cliente){
    let clienteEncontrado= buscarCliente(cliente.cedula);
    if (clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.cedula=cliente.cedula;
        clienteEncontrado.edad=cliente.edad;
    }

}

function crearCliente(){
    let valorCedula=recuperaraTexto("txtCedula");
    let valorNombre=recuperaraTexto("txtNombre");
    let valorEdad=recuperarInt("txtEdad");
    let nuevoCliente= {};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    agregarCliente(nuevoCliente);
}

function ejecutarBusqueda(){
    let valorCedula=recuperaraTexto("txtCedulaBusqueda");
    let cliente=buscarCliente(valorCedula);
    if (cliente==null){
        alert("Cliente no encontrado")
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
    }
}

function buscarCliente(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for (let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if (elementoCliente.cedula==cedula){
            clienteEncontrado=elementoCliente;
            break
        }
    }
    return clienteEncontrado;
}

function mostrarClientes(){
    let cmpTabla=document.getElementById("idTablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for (let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>"+ 
        "<td>"+elementoCliente.nombre+"</td>"+
        "<td>"+elementoCliente.edad+"</td>"+
        "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML=contenidoTabla;
}
