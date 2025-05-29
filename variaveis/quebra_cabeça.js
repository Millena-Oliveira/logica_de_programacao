function executarQuebraCabeca() {
  console.log("=== 01 � Classifica��o por faixa et�ria ===");
  let idade = 27;
  let categoria;

  if (idade < 12) {
    categoria = "Crian�a";
  } else if (idade < 18) {
    categoria = "Adolescente";
  } else if (idade < 60) {
    categoria = "Adulto";
  } else {
    categoria = "Idoso";
  }

  console.log("Categoria: " + categoria);

  console.log("\n=== 02 � Verifica��o de voto ===");
  idade = 16;

  if (idade < 16) {
    console.log("N�o vota");
  } else if (idade < 18 || idade > 65) {
    console.log("Voto opcional");
  } else {
    console.log("Voto obrigat�rio");
  }

  console.log("\n=== 03 � Verifica��o de n�mero positivo/negativo ===");
  let numero = -5;

  if (numero > 0) {
    console.log("N�mero positivo");
  } else if (numero < 0) {
    console.log("N�mero negativo");
  } else {
    console.log("N�mero inv�lido ou zero");
  }

  console.log("\n=== 04 � Tipo de combust�vel ===");
  let combustivel = "�lcool";

  if (combustivel === "gasolina") {
    console.log("Combust�vel selecionado: Gasolina");
  } else if (combustivel === "�lcool") {
    console.log("Combust�vel selecionado: �lcool");
  } else if (combustivel === "diesel") {
    console.log("Combust�vel selecionado: Diesel");
  } else {
    console.log("Op��o inv�lida de combust�vel");
  }

  console.log("\n=== 05 � Verifica��o de velocidade ===");
  let velocidade = 75;

  if (velocidade <= 60) {
    console.log("Multado");
  } else if (velocidade <= 80) {
    console.log("Dentro do limite");
  } else {
    console.log("Aten��o: velocidade acima do permitido");
  }
}

// Executa todos os c�digos
executarQuebraCabeca();
