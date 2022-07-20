// chiedi all’utente il numero di chilometri che vuole percorrere e l’età del passeggero
const chilometri = parseInt( prompt('Inserisci il numero di chilometri che vuoi percorrere.') );
const eta = parseInt( prompt('Inserisci la tua età.') );
console.log(chilometri, eta);

// calcola il prezzo totale del viaggio sapendo che:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzoBiglietto = chilometri * 0.21;
// va applicato uno sconto del 20% per i minorenni
const scontoMinorenni = 0.2;
const prezzoBigliettoMinorenni = prezzoBiglietto * (1 - 0.2);
// va applicato uno sconto del 40% per gli over 65.
const scontoOver65 = 0.4;
const prezzoBigliettoOver65 = prezzoBiglietto * (1 - 0.4);
console.log(prezzoBiglietto, prezzoBigliettoMinorenni, prezzoBigliettoOver65);