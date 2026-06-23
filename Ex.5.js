const evento = {
  nome: "Semana da Tecnologia",
  local: "Auditório",
  data: new Date("2026-08-20"),
  participantes: ["Ana", "Carlos", "Marcos"]
};

function exibirEvento(ev) {
  console.log(`Evento: ${ev.nome}`);
  console.log(`Local: ${ev.local}`);
  console.log(
    ev.data.toLocaleDateString("pt-BR")
  );
  console.log(
    `Participantes: ${ev.participantes.length}`
  );
}

exibirEvento(evento);

// Verificar participantes
if (evento.participantes.length > 0) {
  console.log("Há participantes cadastrados.");
} else {
  console.log("Nenhum participante cadastrado.");
}

// Propriedades e valores
console.log("\nPropriedades:");
console.log(Object.keys(evento));

console.log("\nValores:");
console.log(Object.values(evento));

// Verificar propriedade
console.log(
  "\nLocal cadastrado:",
  evento.hasOwnProperty("local")
);

// Tipo de cada informação
console.log("\nTipos:");

for (let chave in evento) {
  console.log(
    `${chave}: ${typeof evento[chave]}`
  );
}
