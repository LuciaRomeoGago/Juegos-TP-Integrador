const menu = [
    "1. Jugar al ahorcado, presione 1",
    "2. Jugar al adivina el número, presione 2",
    "3. Jugar al adivina quien, presione 3",
    "4. Salir del menú"
  ]; // es un arrayyyyyyyyyyyyy
  
  
let finalQuestion = true; //una flag? Esto es verdadero asique hace esto pero cuando deje de ser verdadero hace otra cosa. 
do { //hace esto miennnnntras
  
  console.log("Menú de juegos:");// Muestra las opciones del menú por consola
  for (let i = 0; i < menu.length; i++) { // un for para que recorra el array
    console.log(menu[i]);
  }
  
  const opcion = prompt("Ingrese el número de la opción que desea ejecutar:");
  
  // Ejecuta la opción seleccionada por el sujeto jeje
  switch (opcion) { // a lo que esta dentro de los parentesis se llama expresion 
    case "1": // declaracion ejecutada cuando el resultado de expresion coincide con el valor. En este caso "1"
      console.log("Ejecutando el juego 1...");
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

      break; //hasta aca
    case "2": // se compara con la expresionnnnnnnnnn
      console.log("Ejecutando el juego 2...");
      const number = Math.floor(Math.random() * 10)+1;
let attempts = 0;
let guess = 0;
while(number !== guess) {
 guess= parseInt(prompt("Adivine el número, del 1 al 10!"));
 attempts++
 if (isNaN(guess)) {
    console.log("Por favor ingresa un número válido.")
}else if (guess < number) {
    console.log("El número por adivinar es mayor al introducido: " + guess+ "!")
} else if (guess > number) {
    console.log("El número por adivinar es menor al introducido: " + guess + "!")
}}
    console.log("Ha adivinado el número "+number+" en "+attempts+" intentos, felicitaciones!")
      break; //finish
    case "3": // nuevamente se compara a ver que onda
      console.log("Ejecutando el juego 3...");
      console.log ("Usted debera adivinar entre modelos internacionales, tales como Kendall Jenner, Sora CHoi, Gigi Hadid, Bella Hadid e Irina Shayk. Por favor respete la mayúscula al comienzo de la palabra");
let preguntaInicial = prompt("¿Su modelo es mayor de 30 años?")
if (preguntaInicial == "Si") {
let preguntaOjos = prompt("¿El color de sus ojos son: negros o azules?")
        if (preguntaOjos == "Negros") {
            alert("Usted ha elegido a Sora Choi!")
        } else {
            alert("Usted ha elegido a Irina Shayk!")
        }
    } else {
        let preguntaEdad = prompt("¿Su modelo es menor de 27 años?")
        if (preguntaEdad == "Si" ) {
            alert("Usted a elegido a Isabella Hadid!")
        } else {
            let preguntaPelo = prompt("¿Su color de cabello es rubio o castaño?")
        if (preguntaPelo == "Rubio") {
            alert("Usted ha elegido a Jelena Hadid!")
        } else { 
            alert("Usted ha elegido a Kendal Jenner!")
        } }
    }  
        
      break; //interrumpe
    case "4": //comparada con la expresion.
      console.log("Saliendo del menú...");
      break; //interrumpe, hasta aca. 
    default: // cuando ninguno de los valores coincide con el valor de la expresion, por ej."9". 
      console.log("Opción inválida.");
      break;
  }
  if (finalQuestion) { // para que repita la pregunta x si quiere volver a jugar, esta medio pachucho
    const answer = prompt ("¿Desea jugar otro juego?");
    if (answer !== "Si") {
      finalQuestion = false;
    }
  } 
} while (finalQuestion);

      break;
  }
