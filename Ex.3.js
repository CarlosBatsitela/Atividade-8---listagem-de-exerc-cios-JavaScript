const autores =
  "Machado de Assis,Clarice Lispector,Monteiro Lobato";

// Transformar em array
const listaAutores = autores.split(",");

// Exibir autores
listaAutores.forEach(autor => console.log(autor));

// Verificar autor
const procura = "Clarice Lispector";

if (listaAutores.includes(procura)) {
  console.log("\nAutor encontrado");
} else {
  console.log("\nAutor não encontrado");
}

// Função
function livro(titulo, autor) {
  return `O livro "${titulo}" foi escrito por ${autor}.`;
}

console.log(
  livro("Dom Casmurro", "Machado de Assis")
);

// Join
console.log("\n" + listaAutores.join(", "));
