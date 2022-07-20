// chiedi all’utente il numero di chilometri che vuole percorrere e l’età del passeggero
const chilometri = parseInt( prompt('Inserisci il numero di chilometri che vuoi percorrere.') );
const eta = parseInt( prompt('Inserisci la tua età.') );

let titolo = document.getElementById('titolo');

const prezzoPerChilometro = 0.21;
const scontoMinorenni = 0.2;
const scontoOver65 = 0.4;

if ( isNaN(chilometri) || isNaN(eta) ) {
    titolo.innerHTML = 'I dati inseriti non sono corretti';
} else {
    // calcola il prezzo totale del viaggio sapendo che:
    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    const prezzoBigliettoBase = chilometri * prezzoPerChilometro;
    let prezzoBiglietto;
    
    if (eta < 18) {
        // va applicato uno sconto del 20% per i minorenni
        prezzoBiglietto = prezzoBigliettoBase * (1 - scontoMinorenni);
    } else if (eta > 65) {
        // va applicato uno sconto del 40% per gli over 65.
        prezzoBiglietto = prezzoBigliettoBase * (1 - scontoOver65);
    } else {
        prezzoBiglietto = prezzoBigliettoBase;
    }

    titolo.innerHTML = 'Il tuo biglietto costa ' + prezzoBiglietto.toFixed(2) + ' €';
}