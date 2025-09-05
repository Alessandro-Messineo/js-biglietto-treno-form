// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
// realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati 
// e visualizzare il calcolo finale con il prezzo. 
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
// (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

// inserire gli input nelle variabili
const inputName = document.getElementById("name");
const inputKm = document.getElementById("km");
const inputAge = document.getElementById("age");
const inputForm = document.querySelector("form");
const outputPar = document.getElementById("output");

// gestione del form
inputForm.addEventListener("submit", (event) => {

    event.preventDefault();

    // coverte i valori di input da stringhe a numeri
    const age = parseInt(inputAge.value);
    const km = parseInt(inputKm.value);

    let price = km * 0.21;

    //calcolo prezzo biglietto
    if (age < 18) {
        const discount = (price * 20) / 100;
        price = price - discount;
    } else if (age > 65) {
        const discount = (price * 40) / 100;
        price = price - discount;
    }

    outputPar.innerHTML = `Nome passeggero: ${inputName.value} <br>`+ `Distanza da percorrere: ${km}Km <br>`+`Prezzo del biglietto: € ${price.toFixed(2)}`;
    inputForm.reset();
})

