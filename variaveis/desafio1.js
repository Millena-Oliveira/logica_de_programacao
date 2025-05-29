// === Função 1: Processar Pedido ===
function processarPedido(produtoEmEstoque, pagamentoAprovado) {
  console.log("Início do processamento do pedido");

  if (produtoEmEstoque) {
    console.log("Produto disponível no estoque.");

    if (pagamentoAprovado) {
      console.log("Pagamento aprovado.");
      console.log("Enviando pedido para expedição...");
    } else {
      console.log("Erro: Pagamento não aprovado.");
    }

  } else {
    console.log("Erro: Produto fora de estoque.");
  }

  console.log("Fim do processamento.");
}

// === Função 2: Calcular Frete ===
function calcularFrete(peso) {
  console.log("Início do cálculo de frete");

  let frete;

  if (peso > 10) {
    frete = 50;
  } else {
    frete = 20;
  }

  console.log(`O valor do frete é: R$ ${frete}`);

  console.log("Fim do cálculo de frete");
  return frete;
}

// === Função 3: Verificar Cliente ===
function verificarCliente(clienteCadastrado) {
  console.log("Início da verificação de cliente");

  if (clienteCadastrado) {
    console.log("Cliente verificado");
  } else {
    console.log("Cliente não encontrado");
  }

  console.log("Fim da verificação");
}

// === Função 4: Processo Completo de Pedido ===
function processarPedidoCompleto({ clienteCadastrado, produtoEmEstoque, pagamentoAprovado, peso }) {
  console.log("Início do processamento completo");

  if (!clienteCadastrado) {
    console.log("Erro: Cliente não encontrado.");
    return;
  }
  console.log("Cliente verificado.");

  if (!produtoEmEstoque) {
    console.log("Erro: Produto fora de estoque.");
    return;
  }
  console.log("Produto disponível no estoque.");

  if (!pagamentoAprovado) {
    console.log("Erro: Pagamento não aprovado.");
    return;
  }
  console.log("Pagamento aprovado.");

  const frete = peso > 10 ? 50 : 20;
  console.log(`Frete calculado: R$ ${frete}`);

  console.log("Enviando pedido para expedição...");
  console.log("Fim do processamento completo");
}

