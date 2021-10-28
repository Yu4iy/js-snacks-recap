
// JSnack 4
// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

const numberColection = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
];
let som = 0;
for(let i = 0; i < numberColection.length; i++ ) {
	if (numberColection[i] % 2 !== 0) {
		som += parseInt(numberColection[i])
	}
} 
console.log(som)
