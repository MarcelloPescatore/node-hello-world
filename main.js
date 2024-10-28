// Creiamo la prima applicazione con NodeJs:
// Iniziate creando un file main.js con un semplice console.log che dica hello node js
// fate girare lo script usando node main.js
// aggiungete allo script una variabile di ambiente chiamata PIN  con associato numero a piacere es. PIN=666
// usate il modulo process per recuperare e stampare in console dalla proprietá env la variabile PIN
// ora passate un argomento al vostro script e recuperatene il valore usando process e la proprietá argv per stamparlo in console

// Bonus:
// se il valore dell'argomento é admin ed il valore di PIN definito é 666 allora stampa in console Welcome Admin
// altrimenti stampa Access restricted

// creo un semplice console log
console.log('Hello node js');

// uso il modulo process per precuperare la variabile d'ambiente
const pin = process.env.PIN;
// stampo in console la variabile PIN
console.log(`PIN: ${pin}`);

// recupero l'argomento riga di comando alla posizione index 2 
const argomento = process.argv[2];
// stampo in console la variabile argomento
console.log(`Argomento passato: ${argomento}`);

// Verifica PIN e argomento
if (argomento === "admin" && pin === "666") {
    console.log("Welcome Admin");
} else {
    console.log("Access restricted");
}
