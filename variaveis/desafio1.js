// === Fun��o 1: Processar Pedido ===
function processarPedido(produtoEmEstoque, pagamentoAprovado) {
  console.log("In�cio do processamento do pedido");

  if (produtoEmEstoque) {
    console.log("Produto dispon�vel no estoque.");

    if (pagamentoAprovado) {
      console.log("Pagamento aprovado.");
      console.log("Enviando pedido para expedi��o...");
    } else {
      console.log("Erro: Pagamento n�o aprovado.");
    }

  } else {
    console.log("Erro: Produto fora de estoque.");
  }

  console.log("Fim do processamento.");
}

// === Fun��o 2: Calcular Frete ===
function calcularFrete(peso) {
  console.log("In�cio do c�lculo de frete");

  let frete;

  if (peso > 10) {
    frete = 50;
  } else {
    frete = 20;
  }

  console.log(`O valor do frete �: R$ ${frete}`);

  console.log("Fim do c�lculo de frete");
  return frete;
}

// === Fun��o 3: Verificar Cliente ===
function verificarCliente(clienteCadastrado) {
  console.log("In�cio da verifica��o de cliente");

  if (clienteCadastrado) {
    console.log("Cliente verificado");
  } else {
    console.log("Cliente n�o encontrado");
  }

  console.log("Fim da verifica��o");
}

// === Fun��o 4: Processo Completo de Pedido ===
function processarPedidoCompleto({ clienteCadastrado, produtoEmEstoque, pagamentoAprovado, peso }) {
  console.log("In�cio do processamento completo");

  if (!clienteCadastrado) {
    console.log("Erro: Cliente n�o encontrado.");
    return;
  }
  console.log("Cliente verificado.");

  if (!produtoEmEstoque) {
    console.log("Erro: Produto fora de estoque.");
    return;
  }
  console.log("Produto dispon�vel no estoque.");

  if (!pagamentoAprovado) {
    console.log("Erro: Pagamento n�o aprovado.");
    return;
  }
  console.log("Pagamento aprovado.");

  const frete = peso > 10 ? 50 : 20;
  console.log(`Frete calculado: R$ ${frete}`);

  console.log("Enviando pedido para expedi��o...");
  console.log("Fim do processamento completo");
}

