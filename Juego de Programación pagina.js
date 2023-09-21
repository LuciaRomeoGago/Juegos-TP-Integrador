const words = ["promocionar", "cursar","aprobar","final","parcial"];
const word = words[Math.floor(Math.random()*words.length)];
let hiddenWord="-".repeat(words.lenght);
let tries = 6;


while (tries > 0 && hiddenWord.includes("-")) {
let letter = prompt ("Ingrese una letra: ");

        console.log("Palabra: "+hiddenWord+".");
        console.log("Le quedan: "+tries+" intentos.");
if (!/^[a-zA-Z]+$/.test(letter)) { // desde la a minuscula hasta la Z mayuscula, lo demas NOP
console.log(letter+" no es una letra, por favor vuelta a intentar: ");
}
else if (word.includes(letter)) {
        for (let i = 0;i < word.length; i++){
            if(word[i]=== letter) 
          hiddenWord = hiddenWord.substring(0, i) + letter + hiddenWord.substring(i + 1); 
        }
      }
        //Deberia avisar y sustituir, DEBERIA!!
        } 
    } else { 
        intentos --1
        console.log("No se encuentra esa letra: "+ letter + ", se le resta un intento, le quedan: " + intentos)
    }
}
if (adivinar === palabra) {
    console.log("Felicitaciones, ha ganado, la palabra era: "+palabra+ "!");
} else {
    console.log ("Lo siento, perdió. La palabra era: " + palabra + ".");
}


    /* Todo deberia estar adentro de un for o while??, para que re reitere hasta
    completar la palabra o se queden sin intentos.
    Ademas de mostrar de alguna manera como se van completando las casillas
    
    Hay que usar return ya sé
 QUIERO HACER UNA LISTA DE PALABRAS!!!!!!!!!!
 Y Q APAREZCAN LAS LETRAS.
}
    

