const produto = {
  nome: "Monitor",
  categoria: "Informática",
  preco: "899.90",
  estoque: 5
};

// Converter preço para número
produto.preco = Number(produto.preco);

// Validar preço
if (isNaN(produto.preco)) {
  console.log("Preço inválido.");
} else {

  function exibirProduto(prod) {
    console.log(`Produto: ${prod.nome}`);
    console.log(`Categoria: ${prod.categoria}`);
    console.log(`Preço: R$ ${prod.preco}`);
  }

  exibirProduto(produto);

  if (produto.estoque < 10) {
    console.log("\nEstoque baixo");
  } else {
    console.log("\nEstoque adequado");
  }

  console.log("\nPropriedades:");
  console.log(Object.keys(produto));

  console.log("\nValores:");
  console.log(Object.values(produto));

  console.log("\nTipos:");
  for (let chave in produto) {
    console.log(`${chave}: ${typeof produto[chave]}`);
  }
}
