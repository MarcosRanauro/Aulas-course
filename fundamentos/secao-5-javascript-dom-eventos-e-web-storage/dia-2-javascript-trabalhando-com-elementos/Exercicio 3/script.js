// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

const pai = document.getElementById('pai');
    const todosOsFilhos = pai.childNodes;
    for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
      const filhoAtual = todosOsFilhos[index];
      if (filhoAtual.id !== 'elementoOndeVoceEsta') {
        filhoAtual.remove();
      }
    }
    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); // Recupera o elemento com o id segundoEUltimoFilhoDoFilho
    segundoEUltimoFilhoDoFilho.remove(); // Remove o segundo filho do filho
