function Jugador(nombre) {

    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.curar = function (jugadorObjetivo) {
        if (this.sp >= 40) {
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        } else {
            console.info(this.nombre + " no tiene sp");
        }
        this.estado(jugadorObjetivo);

    }
    this.estado = function ( jugadorObjetivo) {
        console.log( this );
        console.info( jugadorObjetivo );
    }
    this.tirarFlecha = function (jugadorObjetivo) {
        if (jugadorObjetivo.pv >=40){
            jugadorObjetivo.pv -=40;
        }else{
            jugadorObjetivo.pv =0;
            console.error(jugadorObjetivo.nombre +" murio!!!");
        }
        this.estado( jugadorObjetivo);
        
    }
    this.revivir = function (jugadorObjetivo) {
        if (jugadorObjetivo.pv == 0){
            jugadorObjetivo.pv += 40;
        }else{
            console.log("el jugador aun conserva vida");
        }
        this.estado( jugadorObjetivo )
        
    }
}

let gandalf = new Jugador("Gandalf")
var legolas = new Jugador("Legolas")

console.log(gandalf, legolas);
gandalf.curar(legolas);

console.log(gandalf, legolas);