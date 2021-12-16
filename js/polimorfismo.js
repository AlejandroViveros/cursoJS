
function determinaDarto(a) {
   if( a=== undefined ){
       console.log("A es undefined... no se que hacer");
   } 
   if(typeof a === "number"){
       console.log("A es un numero, puedo hacer operaciones con numeros");
   }

   if(typeof a ==="string"){
       console.log("A es un texto y puedo hacer operaciones con texto");
   }

   if(typeof a==="object"){
       console.log("A es un objeto... pero puede hacer cualquier cosa");
   }
   if(a instanceof Number){
       console.log("A es un objeto numerico");
   }
}

determinaDarto({
    nombre: "Carolina"
});

var b = new Number(9);
console.log(b);
determinaDarto(b);