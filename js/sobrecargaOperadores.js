
function crearProducto(nombre, precio) {
    
    nombre = nombre || "sin nombre";
    precio = precio || 0;
    console.log("Producto: ", nombre, "Precio: " ,precio);

}
// se crea 
function crearProducto100(nombre) {
    crearProducto(nombre, "100clp")
    
}

function crearProductoCamisa(precio) {
    crearProducto("camisa", precio)
    
}

crearProducto("Papas Fritas", "200clp");
crearProducto100("corrector");
crearProductoCamisa("75 clp");

