// JSnack 3
//  Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti con for
//  e opzionalmente con while (edited)
let som = 0;
for(i = 0; i < 5; i++) {
    let number = parseInt(prompt('inserire Numero'))
    som += number
}
console.log(som)