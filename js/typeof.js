function identifica(param) {
//    if (typeof param == "function"){
//        param();
//    }else{
//        console.log(param);
//    }
    console.log(`typeof:${typeof param}` );
    console.log(`instanceof Persona:${param instanceof Persona }`);
}

function Persona() {
    this.nombre ="Alejandro";
    this.edad = 24;
}

let alejandro = new Persona();

// identifica( function(){console.log("soy anonima");});
identifica ( alejandro );
