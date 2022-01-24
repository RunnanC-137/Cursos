function NumBr(num) {
	let numero = num
    numero = numero.replace(',' , '.')
	if (parseInt(numero) != NaN && parseFloat(numero) == NaN) {
		numero = parseInt(numero);
        return numero;
	}
	else if (parseFloat(numero) != NaN) {
		numero = parseFloat(numero);
        return numero;
	}
    else {
        return NaN;   
    }
}



