function NumBr(num, repeat=false) {
	let chave = repeat
	let numero = num
    numero = String(numero).replace(',' , '.')
	if (isNaN(numero)) {
		if (chave) {
			while (isNaN(numero)){
			numero = prompt('digite um numero válido')
			numero = String(numero).replace(',' , '.')
			}
			return numero
		}
		else {
			return NaN
		}
	}
    else {
        numero = parseFloat(numero);
        return numero;   
    }
}

var nome = document.getElementById('title_name')
nome.innerHTML = "Nome"