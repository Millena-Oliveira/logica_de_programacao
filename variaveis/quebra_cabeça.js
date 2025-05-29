function executarQuebraCabeca() {
  console.log("=== 01 – Classificação por faixa etária ===");
  let idade = 27;
  let categoria;

  if (idade < 12) {
    categoria = "Criança";
  } else if (idade < 18) {
    categoria = "Adolescente";
  } else if (idade < 60) {
    categoria = "Adulto";
  } else {
    categoria = "Idoso";
  }

  console.log("Categoria: " + categoria);

  console.log("\n=== 02 – Verificação de voto ===");
  idade = 16;

  if (idade < 16) {
    console.log("Não vota");
  } else if (idade < 18 || idade > 65) {
    console.log("Voto opcional");
  } else {
    console.log("Voto obrigatório");
  }

  console.log("\n=== 03 – Verificação de número positivo/negativo ===");
  let numero = -5;

  if (numero > 0) {
    console.log("Número positivo");
  } else if (numero < 0) {
    console.log("Número negativo");
  } else {
    console.log("Número inválido ou zero");
  }

  console.log("\n=== 04 – Tipo de combustível ===");
  let combustivel = "álcool";

  if (combustivel === "gasolina") {
    console.log("Combustível selecionado: Gasolina");
  } else if (combustivel === "álcool") {
    console.log("Combustível selecionado: Álcool");
  } else if (combustivel === "diesel") {
    console.log("Combustível selecionado: Diesel");
  } else {
    console.log("Opção inválida de combustível");
  }

  console.log("\n=== 05 – Verificação de velocidade ===");
  let velocidade = 75;

  if (velocidade <= 60) {
    console.log("Multado");
  } else if (velocidade <= 80) {
    console.log("Dentro do limite");
  } else {
    console.log("Atenção: velocidade acima do permitido");
  }
}

// Executa todos os códigos
executarQuebraCabeca();
