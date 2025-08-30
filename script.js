// Elementos do DOM
const numbersInput = document.getElementById('numbersInput');
const revealButton = document.getElementById('reveal-button');
const returnButton = document.getElementById('return-button');
const resultSection = document.getElementById('resultSection');
const calculationSteps = document.getElementById('calculationSteps');
const finalResult = document.getElementById('finalResult');

// Função principal para encontrar os três maiores números únicos
function findTopThreeUniqueNumbers(numbers) {
  // Passo 1: Remover duplicatas usando Set
  const uniqueNumbers = [...new Set(numbers)];

  // Passo 2: Ordenar do maior para o menor
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

  // Passo 3: Pegar os três primeiros
  const topThree = sortedNumbers.slice(0, 3);

  return {
    original: numbers,
    unique: uniqueNumbers,
    sorted: sortedNumbers,
    result: topThree
  };
}

// Função para validar e processar a entrada
function processInput(inputString) {
  try {
    // Remove espaços e divide por vírgula
    const numbersArray = inputString
      .split(',')
      .map(str => str.trim())
      .filter(str => str !== '')
      .map(str => {
        const num = parseFloat(str);
        if (isNaN(num)) {
          throw new Error(`"${str}" não é um número válido`);
        }
        return num;
      });

    if (numbersArray.length === 0) {
      throw new Error('Por favor, digite pelo menos um número');
    }

    return numbersArray;
  } catch (error) {
    throw error;
  }
}

// Função para exibir os passos do cálculo
function displayCalculationSteps(data) {
  calculationSteps.innerHTML = `
        <div class="step">
            <div class="step-title">🗂️ Números do Mapa Original:</div>
            <div class="step-content">[${data.original.join(', ')}]</div>
        </div>
        
        <div class="step">
            <div class="step-title">💎 Tesouros Únicos Identificados:</div>
            <div class="step-content">[${data.unique.join(', ')}]</div>
        </div>
        
        <div class="step">
            <div class="step-title">📊 Ranking dos Tesouros (maior → menor):</div>
            <div class="step-content">[${data.sorted.join(', ')}]</div>
        </div>
        
        <div class="step">
            <div class="step-title">🏆 Os 3 Maiores Tesouros de Kodokai:</div>
            <div class="step-content">
                ${
                  data.result.length < 3
                    ? `Apenas ${data.result.length} tesouro(s) único(s) encontrado(s)`
                    : 'Os três tesouros mais valiosos foram selecionados!'
                }
            </div>
        </div>
    `;
}

// Função para exibir o resultado final
function displayFinalResult(result) {
  finalResult.innerHTML = `
        <div class="result-label">🗺️ Localização dos Tesouros Encontrada! 🗺️</div>
        <div class="result-numbers">[${result.join(', ')}]</div>
    `;
}

// Função para mostrar erro
function displayError(message) {
  calculationSteps.innerHTML = `
        <div class="step">
            <div class="step-title">⚠️ Ops! Algo deu errado na busca pelos tesouros:</div>
            <div class="step-content" style="color: #ff6b6b;">${message}</div>
        </div>
    `;
  finalResult.innerHTML = '';
}

// Função para adicionar efeito de loading
function addLoadingEffect() {
  document.body.classList.add('loading');
  revealButton.textContent = 'CALCULANDO...';
}

// Função para remover efeito de loading
function removeLoadingEffect() {
  document.body.classList.remove('loading');
  revealButton.textContent = 'DESVENDAR';
}

// Função para limpar resultados
function clearResults() {
  resultSection.classList.add('hidden');
  calculationSteps.innerHTML = '';
  finalResult.innerHTML = '';
  numbersInput.value = '';
  numbersInput.focus();
}

// Event listener para o botão DESVENDAR
revealButton.addEventListener('click', () => {
  const inputValue = numbersInput.value.trim();

  if (!inputValue) {
    displayError('Por favor, digite os números do mapa antes de iniciar a busca pelos tesouros do Sensei Kodokai!');
    resultSection.classList.remove('hidden');
    return;
  }

  // Adiciona efeito de loading
  addLoadingEffect();

  // Simula um pequeno delay para mostrar a animação
  setTimeout(() => {
    try {
      // Processa a entrada
      const numbers = processInput(inputValue);

      // Encontra os três maiores números únicos
      const calculationData = findTopThreeUniqueNumbers(numbers);

      // Exibe os passos e resultado
      displayCalculationSteps(calculationData);
      displayFinalResult(calculationData.result);

      // Mostra a seção de resultado
      resultSection.classList.remove('hidden');
    } catch (error) {
      displayError(error.message);
      resultSection.classList.remove('hidden');
    } finally {
      removeLoadingEffect();
    }
  }, 800);
});

// Event listener para o botão RETORNAR
returnButton.addEventListener('click', () => {
  // Adiciona efeito de loading também para o retornar
  document.body.classList.add('loading');
  returnButton.textContent = 'RETORNANDO...';

  setTimeout(() => {
    clearResults();
    document.body.classList.remove('loading');
    returnButton.textContent = 'RETORNAR';
  }, 600);
});

// Event listener para Enter no input
numbersInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    revealButton.click();
  }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Esconde a seção de resultado inicialmente
  resultSection.classList.add('hidden');

  // Foca no input
  numbersInput.focus();

  // Exemplos para testar rapidamente (pode ser removido em produção)
  console.log('🏴‍☠️ Exemplos de mapas do tesouro para testar:');
  console.log('Mapa 1: 4, 2, 9, 5, 7, 9, 1, 3 → Tesouros: [9, 7, 5]');
  console.log('Mapa 2: -5, -10, -1, -3, -4, -1 → Tesouros: [-1, -3, -4]');
  console.log('Mapa 3: 10, 10, 10, 5, 3 → Tesouros: [10, 5, 3]');
});
