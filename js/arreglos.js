var arr = [5, 4, 3, 2, 1];
console.log( arr );

console.log(arr [0], arr[4]);

// invierte el arreglo
arr.reverse();
console.log(arr);
// recorre el arreglo ejecuntando una funcion por cada elemento
arr = arr.map(function(elem){
    elem *=elem;
    return elem;
});
console.log(arr);
 
arr = arr.map ( Math.sqrt);
console.log ( arr );
// join agrega un caracter y separa el arreglo 
arr = arr.join("!");
console.log(arr);
//  split corta o suprime el caracter señalado
arr = arr.split ("!")
console.log(arr);
// push agrega elementos a la ultima pos del arreglo
arr.push("6");
console.log(arr);
// unshift agrega elementos a la ultima posicion 
arr.unshift("0");
console.log(arr);
// toString pone la representacion textual del arreglo, mas eficiente que Split pero no puede ingresar parametros
console.log(arr.toString() );
// a partir de la posicion se pueden borrar N cantidad de registros y tambien puede agregar, en este caso borrarmos el registro uno y agregamos en esa pos el numero 10
arr.splice(1, 1, "10")
console.log(arr);
// corta de donde hasta donde le indiquemos e ignora lo demas
arr = arr.slice(1, 3);
console.log(arr);
// length se usa para saber el largo del arreglo
console.log(arr.length);