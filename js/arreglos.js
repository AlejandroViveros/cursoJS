// definir arreglos
let arr = [5,4,3,2,1];
console.log(arr);

//mostrar posiciones del arreglo 
console.log(arr[0], arr[4], arr[5]);

// invertir arreglo
arr.reverse();
console.log( arr );

// map recorre nuestro arreglo y ejecuta alguna intruccion devolviendo nuevos valores por cada posicion
arr = arr.map(  (elem)=> {
    elem *= elem;
    return elem;    
});
console.log( arr );

// hace lo mismo que lo anterior, pero en este caso la intruccion es devolver raiz cuadrada
arr = arr.map( Math.sqrt );
console.log( arr );

// join junta el arreglo en un string y los separa por el parametro que se envia
// si no envia algo, se separa por comas 
arr= arr.join("|");
console.log( arr );

// convierte un string en un arreglo, separado por lo que se envie como parametro
arr= arr.split("|");
console.log( arr );

// let oracion = "La carito es bella";
// oracion = oracion.split(" ");

// console.log(oracion);

arr.push("6");
console.log(arr);

arr.unshift("0");
console.log(arr);

console.log(arr.toString ());

var elimine = arr.pop();
console.log( arr, elimine );

arr.splice( 1, 0, "10", "20", "30")
console.log(arr);

arr = arr.splice (0, 2);
console.log(arr);