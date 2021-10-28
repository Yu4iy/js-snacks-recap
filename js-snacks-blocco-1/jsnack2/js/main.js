// JSnack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt('inserire parola 1')
const parola2 = prompt('inserire parola 2')

if(parola1.length > parola2.length){
    alert(`${parola1} piu grande di ${parola2}`)
}
else if (parola1.length <  parola2.length){
    alert(`${parola2} piu grande di ${parola1}`)
}
else{
    alert('pari')
}
