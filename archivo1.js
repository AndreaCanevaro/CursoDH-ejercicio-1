//console.log ("Archivo 1");
//let diaDeLaSemana="Jueves";

function costa (diaDeLaSemana){
    
    // if ((diaDeLaSemana!="Lunes")||(diaDeLaSemana!="Martes")||(diaDeLaSemana!="Miércoles")){
        if(diaDeLaSemana == "Jueves") {
        //console.log ("Viajar a la costa");
        return ("¡Nos vamos a la costa!");
    } else if (diaDeLaSemana == "Domingo") {
        //console.log("Quedarse en casa")
        return("¡Hay que volver a casa!");
    } else if (diaDeLaSemana == "Viernes" || diaDeLaSemana == "Sábado") {
        return("¡Vamos a la playa!")
    } else {
        return ("¡Hoy es " + diaDeLaSemana +  ", hay que ir a trabajar!");
    }
};



console.log (costa("un día cualquiera"));

