function calcularImc(peso, altura){
	let imc = peso / Math.pow(altura, 2);
    return imc.toFixed(1)  
};

function classificatImc(imc){
	if(imc < 18.5){
    	return 'Abaixo do Peso'
    } else if(imc < 25 ){
    	return 'Peso Normal'
    } else if(imc < 30){
    	return 'Acima do Peso'
    } else if(imc < 40){
    	return 'Obeso'
    } else {
    	return 'Obesidade Grave'
    }
}

// main
(function (){
  const peso = 75;
  const altura = 1.75;

  const imc = calcularImc(peso, altura)
  console.log(classificatImc(imc));
})()

//main();
console.log("Pratica de Funções");
