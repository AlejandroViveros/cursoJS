let arr = [
    true,
    {
        nombre: "Alejandro",
        apellido: "Viveros"
    },
    function () {
        console.log("Estoy dentro de un arreglo");
    },
    function (persona) {
        console.log(persona.nombre + " " + persona.apellido);

    },
    ["Alejandro",
        "Fernando",
        "Ian",
        "carito",
        [
            "camila",
            "rigoberto",
            "Matias",
            "rodrigo"

        ]
    ]
]
console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);

arr[2]();
// le manda como parametros a la pos 3, los datos de la pos 2 osea alejandro viveros
arr[3](arr[1]);

console.log(arr[4][4][2]);

var arreglo2 = arr[4][4];

arreglo2[1] = "Rigoberta";
console.log(arreglo2);
console.log(arr);
