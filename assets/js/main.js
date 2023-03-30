// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// palindroma 

// chiedere all'utente di inserire una parola

let parola = prompt("Inserisci una parola");
console.log(parola);


// Creare una funzione per capire se la parola inserita è palindroma

function palindroma(parola) {
    if (parola == parola.split('').reverse().join('')) {
        return true;
    
    } else {
        return false;

    }
} 

let risultato = palindroma(parola);
console.log(risultato);

 if (risultato == true) {
    document.querySelector('.box').innerHTML= '<h3>La parola che hai scelto è palindroma</h3>';
 } else {
    document.querySelector('.box').innerHTML= '<h3>La parola che hai scelto non è palindroma</h3>';
 }





// pari e dispari

// L’utente sceglie pari o dispari 

document.getElementById('bottone').addEventListener('click',function() { 

// let scelta = prompt("pari o dispari?");
let scelta = document.querySelector('#cars').value;

let soldatino = false;

if (scelta == 'pari')   {   
    soldatino = true;

} else if (scelta == 'dispari') {    
    soldatino = false;
}



// stampo la scelta

// document.writeln(`hai scelto ${scelta}`);


// chiedo all'utente di scegliere un numero da 1 a 5

// let numero = parseInt(prompt("Inserisci un numero da 1 a 5"));
let numero = document.querySelector('#numbers').value;

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
 let min = 1;
 let max = 5;
 let computer = random(min, max);
 
 function random(min, max) {


 let computer = Math.floor(Math.random() * (max - min + 1) + min);
 return computer;  
}


// faccio la somma dei due numeri

let somma = numero + computer;


// stampo la somma

// document.writeln(`la somma dei numeri è ${somma}`);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

if (soldatino == true && somma % 2 == 0) {
    document.querySelector('#gioco').innerHTML = '<p>hai vinto</p>';
} else if (soldatino == false && somma % 2!== 0) {
    document.querySelector('#gioco').innerHTML = '<p>hai vinto</p>';
} else {
    document.querySelector('#gioco').innerHTML = '<p>non hai vinto</p>';
}


})











