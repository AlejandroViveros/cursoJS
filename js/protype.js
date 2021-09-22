function Persona() {
    this.nombre = "Alejandro";
    this.apellido = "Viveros";
    this.edad = 24;
    this.pais = "chile";
}

Persona.prototype.imprimirInformacion = function () {
    console.log(`${this.nombre} ${this.apellido} (${this.edad})`);

}
var ale = new Persona();
// ale.imprimirInformacion();
console.log(ale);
console.log(ale.pais);