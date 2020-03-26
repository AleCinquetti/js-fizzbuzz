// OGGETTO ESERCIZIO
// Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// // Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

// COMMENTI:
// Ho bisogno di un ciclo che traversi i numeri da uno a 100.
// I multipli di 3 sono tutti i numeri il cui resto di una divisione per 3 è uguale a 0.
// Lo stesso discorso vale per i multipli di 5.
// Per far si che non vengano stampati sia numeri che le parole nei casi considerati, ho bisogno di annidare le mie condizioni. (Se utilizzassi tre "if" indipendenti, verrebbe si stampata la parola voluta, ma verrebbe anche stampato il numero associato a tale parola).
// Inoltre la prima condizione da verificare deve essere quella che include entrambi i numeri (3 && 5): se ponessi questa condizione come ultima, il ciclo leggerà in prima istanza che il numero sarà divisibile per 3 o per 5, stampando la parola nel caso specifico, quindi passerà all'iterazione successiva, senza "chiedersi" se quel numero potesse essere divisibile sia per 3 che per 5, non stampando la parola desiderata.

for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
