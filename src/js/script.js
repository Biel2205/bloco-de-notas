var notas = [];

function salvarNota() {
  // 1. Capturar o valor digitado no textarea
  const nota = document.getElementById('nota').value.trim();

  // 2. Verificar se o valor não está vazio
  if (nota === '') {
    alert('Por favor, digite uma nota antes de salvar.');
    return;
  }

  // 3. Adicionar ao array notas[]
  notas.push(nota);

  // 4. Limpar o campo
  document.getElementById('nota').value = '';

  // Atualizar a lista
  carregarNotas();
}

/** NÃO MEXA NA FUNÇÃO CARREGAR NOTAS */
function carregarNotas() {
  const lista = document.getElementById('listaNotas');
  lista.innerHTML = "";

  notas.forEach((nota, index) => {
    const li = document.createElement('li');
    li.textContent = nota;
    lista.appendChild(li);
  });
}