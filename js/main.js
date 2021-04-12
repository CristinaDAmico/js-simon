/***********************
    MAIN JAVASCRIPT
***********************/

// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Ref
var quantità = 5;
var numeri = [];
var numeriUtente = [];
var riscontro = [];


// Creazione arrey di 5 numeri random
while(numeri.length < quantità) {
    var numero = randNumb (1, 100);
    if(!numeri.includes(numero)) {
        numeri.push(numero);
    }  
}

//  Numeri che l'utente deve ricordare
alert("Memorizza i seguenti numeri: " + numeri);

// Dopo 30 secondi chiedere all'utente di inserire i numeri visti in precedenza
setTimeout(function(){
    while(numeriUtente.length < quantità) {
        var numeroInserito = parseInt( prompt("Inserisci il numero " + (numeriUtente.length + 1) + " di " + quantità) );
        
        //Validazione
        while(numeroInserito < 0 || numeroInserito > 100 || isNaN(numeroInserito)) {
            var numeroInserito = parseInt( prompt("Valore non valido! Inserisci il numero " + (numeriUtente.length + 1) + " di " + quantità) );
        }
        while(numeriUtente.includes(numeroInserito)) {
            var numeroInserito = parseInt( prompt("Numero già inserito! Inserisci il numero " + (numeriUtente.length + 1) + " di " + quantità) );
        }

        numeriUtente.push(numeroInserito);
    }
    

    // Numeri individuati
    for (var i = 0; i < numeriUtente.length; i++) {
        if( numeri.includes(numeriUtente[i]) ) {
            riscontro.push(numeriUtente[i]);
        }   
    }

    // Output
    console.log("Hai indovinato " + riscontro.length + " numeri su " + numeri.length);
    console.log("I numeri indovinati sono: " + riscontro);


}, 30000);



/*************************
    FUNCTION UTILITIES
*************************/

// Generatore numeri random da 1 a 100

function randNumb (min, max) {
    return Math.floor( Math.random() * (max - min) + min ) + 1;
};
