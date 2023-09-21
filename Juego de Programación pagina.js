const palabra = "promocionar";
let intentos = 3;
let adivinar = []

while (intentos > 0 && adivinar !== palabra) {
pregunta = prompt ("Ingrese una letra para adivinar la palabra: ");

if (palabra.indexOf(pregunta) != -1) {
        for (let i=0;i<palabra.length; i++){
            if(palabra[i]==pregunta) 
            console.log ("Esta la letra: " + pregunta +  "en la posición: " + i) // Tambien avisa si hay mas de una de esas letras
        adivinar.push(pregunta) 
        //Deberia avisar y sustituir, DEBERIA!!
        } 
    } else { 
        intentos -= 1
        pregunta += 1 
        console.log("No se encuentra esa letra, se le resta un intento, le quedan: " + intentos)
    }
}
if (adivinar === palabra) {
    console.log("Felicitaciones, ha ganado, la palabra era: "+palabra);
} else {
    console.log ("Lo siento, perdió. La palabra era: " + palabra)
}


    /* Todo deberia estar adentro de un for o while??, para que re reitere hasta
    completar la palabra o se queden sin intentos.
    Ademas de mostrar de alguna manera como se van completando las casillas
    
    Hay que usar return ya sé
 QUIERO HACER UNA LISTA DE PALABRAS!!!!!!!!!!
 Y Q APAREZCAN LAS LETRAS.
}
    

