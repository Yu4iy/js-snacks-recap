
// JSnack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nameColection = [
	'Paolo ',
	'Alfredo ',
	'Fabio ',
	'Luca ',
	'Mario ',
];
const surColection = [
	'Palermo',
	'De Rosa',
	'Berlusconi',
	'Trump',
	'Biden',
];

	

for(let i = 0; i < 3; i++) {
	let randName = Math.floor(Math.random() * nameColection.length)
	let randSure = Math.floor(Math.random() * surColection.length)	

	let name = (nameColection[randName])
	let surname = (surColection[randSure])		


	console.log((name ) + (surname))
}

