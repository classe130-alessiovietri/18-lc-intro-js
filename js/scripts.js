// Commento singola riga

/* 
    Commento
    multi
    riga
*/

/* 
    Questa scrittura mi scrive Hello World! come ultimo
    pezzo del mio HTML (prima della chiusura di <body>)
*/
document.writeln('<h2 class="ciccio">Hello World!</h2>');
document.writeln('<h3 style="color: red;">Hello World!</h3>');
document.writeln('<h4>Hello World!</h4>');
document.writeln('<h5>Hello World!</h5>');
document.writeln('<h6>Hello World!</h6>');

/*
    Questa scrittura fa uscire un pop-up con quello
    che ho scritto tra parentesi

    Questo pop-up va confermato ed è bloccante
    (cioè, finché non confermo, l'esecuzione non procede)
*/
// alert('Ciao raghi');

/* 
    Prendo dall'HTML l'elemento con id="mio_id"
    e ne cambio il contenuto
*/
document.getElementById('mio_id').innerHTML = 'Hello World 3!';
document.getElementById('mio_id').innerHTML = '<a href="#">Hello World 4!</a>';

console.log(document.getElementById('mio_id').innerHTML);
console.log(document.getElementById('mio_id').outerHTML);

console.log(miaVariabile3); // Si vede perché var è soggetto ad hoisting

/* 
    VARIABILI
*/
/* 
    Dichiarazione di una variabile
    Le dichiarazioni vanno fatte UNA sola volta per nome
*/
const miaVariabile1 = "Com'è bello il mare";
let miaVariabile2 = 'Michele';
var miaVariabile3 = 77;  // NON usiamo var perché l'hoisting non ci piace

console.log(miaVariabile1);

/* 
    Aggiornamento di una variabile
    Il valore di una variabile si aggiorna tramite un'assegnazione
    Posso aggiornare il valore di una variabile tutte le volte che voglio
*/
miaVariabile2 = 'Ciao';
console.log(miaVariabile2);
miaVariabile2 = 3;
console.log(miaVariabile2);
console.log(typeof miaVariabile2);
miaVariabile2 = '5';
console.log(miaVariabile2);
console.log(typeof miaVariabile2);

console.log(3 + ' Antonio');
console.log(3 + 3);
console.log(3 + '3');
console.log(3 * '3');
console.log(3 / '3');
console.log(3 - '3');
console.log(3 * ' Anto');
console.log(3 / ' Anto');
console.log(3 - ' Anto');

	
// dichiarazione variabile
// let miaStringa;
 
// // assegnazione
// miaStringa = 'ciao';
// // utilizzo/richiamo
// alert(miaStringa);
 
// // assegnazione
// miaStringa = 'arrivederci';
// // utilizzo/richiamo
// alert(miaStringa + ' ' + miaStringa);

const varBooleana = true;
console.log(varBooleana);
console.log(typeof varBooleana);

const varNull = null;
console.log(varNull);
console.log(typeof varNull);


const name = 'Alessio';
const age = prompt('Qual è la tua età?');
console.log(age);
console.log(typeof age);
console.log(parseInt(age));
console.log(typeof parseInt(age));

const myStr = `
    Ciao sono ${name} e ho ${age} anni
`;

console.log(myStr);

const ciccio = document.getElementById('mio_id');
console.log(ciccio);
console.log(ciccio.innerHTML);