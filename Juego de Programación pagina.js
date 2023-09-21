const words = ["aprobar", "promocionar", "cursar", "rendir"];
const word = words[Math.floor(Math.random() * words.length)];
let hiddenWord = "_".repeat(word.length);
let tries = 6;

while (tries > 0 && hiddenWord.includes("_")) {
  console.log("Palabra: " + hiddenWord);
  console.log("Le quedan: " + tries + " intentos");

  const letter = prompt("Ingrese una letra: ");
  if (!/^[a-zA-Z]+$/.test(letter)) { // desde la a miniscula hasta la Z mayuscula, sino es un simbolo y se toma como falso
    console.log(letter + " no es una letra, por favor ingrese una: ");
  }
  
  else if (word.includes(letter)) { // mas facil un includes que el indexOf 
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWord = hiddenWord.substring(0, i) + letter + hiddenWord.substring(i + 1); 
      }
    }
  }
  
  else {
    console.log ("Ha ingresado la letra: " + letter + ", la cual no se encuentra en la palabra")
    tries--;
  }
}


if (hiddenWord === word) {
  console.log("Felicitaciones, la palabra era: " + word + "!");
} else {
  console.log("Lo siento, ha perdido, la palabra era: " + word+".");
}


    /* Todo deberia estar adentro de un for o while??, para que re reitere hasta
    completar la palabra o se queden sin intentos.
    Ademas de mostrar de alguna manera como se van completando las casillas
    
    Hay que usar return ya sé
 QUIERO HACER UNA LISTA DE PALABRAS!!!!!!!!!!
 Y Q APAREZCAN LAS LETRAS.
}
    

