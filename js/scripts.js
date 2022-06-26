// Ejercicio 1:
// Diseña un algoritmo que cuente las 
// veces que aparece una determinada letra en una frase

 let text = "Cuantas letras E hay en esta frase?";
 let counter = 0;
 for (let i = 0; i <= text.length; i++) {
   if (text.charAt(i) === "e") {
     counter++;
   }
 }
 console.log(counter);






// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares 
// entre un número dado por el usuario y los siguientes 50 números

let user_number = parseInt(prompt("Introduzca un nùmero para saber cuales son los 50 nùmeros que le siguen"))
let print_number= []
for(i=0; i<(user_number+50); i++){
    user_number[i]
    print_number++
    console.log(print_number)
}