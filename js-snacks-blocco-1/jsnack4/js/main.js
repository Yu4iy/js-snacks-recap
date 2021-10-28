
// JSnack 4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array
// Proseguire poi con quelli presenti nel blocco JS Snacks 2 (trovate pdf in allegato). Di questo blocco fatene almeno 2.

const number = []
for(i = 0; i < 6; i++) {
    let insertNumber = parseInt(prompt('inserire Numero'))
    if(insertNumber % 2 !== 0 ){
        number.push(insertNumber)
    }
    
}
alert(`Numeri dispari sono ${number}`)