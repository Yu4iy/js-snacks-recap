
// JSnack 2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo
let number = parseInt(prompt('Inserire Numero'))

if (number % 2 === 0 ){
    alert(number)
}
else if(number % 2 !== 0 ) {
    number++
    alert(number)
}