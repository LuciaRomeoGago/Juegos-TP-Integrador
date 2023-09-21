const number = Math.floor(Math.random() * 10)+1;
let attempts = 0;
let guess;
while(number !== guess) {
 guess= parseInt(prompt("Adivine el número, del 1 al 100!"));
 attempts++
 if (isNaN(guess)) {
    console.log("Por favor ingresa un número válido.")
}else if (guess < number) {
    console.log("El número por adivinar es mayor al introducido: " + guess+ "!")
} else {
    console.log("El número por adivinar es menor al introducido: " + guess + "!")
}}
    console.log("Ha adivinado el número "+number+" en "+attempts+" intentos, felicitaciones!")
// me hace todo bien pero por alguna razon me imprime el nro dos veces dentro y fuera de la consigna
