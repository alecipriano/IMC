function calcularImc(peso, altura){
	let imc = peso / Math.pow(altura, 2);
    return imc.toFixed(1)  
};

function classificatImc(imc){
	if(imc < 18.5){
    	return 'Abaixo do Peso'
    } else if(imc >= 18.5 && imc < 24.9){
    	return 'Peso Normal'
    } else if(imc >= 25 && imc < 29.9){
    	return 'Sobrepeso'
    } else if(imc >= 30 && imc < 34.9){
    	return 'Obesidade grau I'
    } else if(imc >= 35 && imc < 39.9){
      return 'Obesidade grau II'
   }  else if(imc >= 40 && imc < 49.9){
      return 'Obesidade grau III'
   }  else if(imc >= 50 && imc < 59.9){
      return 'Obesidade grau IV'
   }  else {
    	return 'Obesidade grau V'
    }
}

// main
(function (){
  const peso = 95;
  const altura = 1.75;

  const imc = calcularImc(peso, altura)
  console.log(classificatImc(imc));
})()

//main();
console.log("Pratica de Funções");
