// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
// Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola
// nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.

let somma = document.querySelector('.somma')
let media = document.querySelector('.media')
let btn = document.querySelector('.btn')


btn.addEventListener('click', function(){
    let input = ''
    let somma = 0
    let media = 0
    
    while(input.length > 4 || input.length < 4 || isNaN(input)){
    input = prompt('INSERIRE NUMERO DI 4 CIFRE')
    } 
    
    for (let i = 0; i < input.length; i++) {
        somma += parseInt( input[i])
        
    }
    media = somma / input.length
    media = document.querySelector('.media').innerHTML = (`MEDIA DI ${somma} E ${media}`) 
    somma = document.querySelector('.somma').innerHTML = (`SOMMA ${somma}`)
})





























