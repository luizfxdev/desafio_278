# ㊙️ Os Tesouros Perdidos do Sensei Kodokai

## 🗺️ Sobre o Projeto

Bem-vindo, aventureiro! Você acaba de encontrar um antigo mapa de tesouros pertencente ao lendário Sensei Kodokai, um mestre em artes digitais e algoritmos secretos.
Para encontrar os tesouros perdidos, você precisa decifrar uma sequência de números e descobrir os três maiores números únicos que codificam a localização secreta dos tesouros mais valiosos!

## 🎯 Objetivo do Desafio

Criar um algoritmo em JavaScript que:

***Receba uma lista de números inteiros (positivos e negativos)***
***Remova números duplicados***
***Retorne os três maiores números únicos ordenados do maior para o menor***

### ✨ Exemplos de Mapas do Tesouro
```
javascript

// Mapa 1
Entrada: [4, 2, 9, 5, 7, 9, 1, 3]
Tesouros Encontrados: [9, 7, 5]

// Mapa 2  
Entrada: [-5, -10, -1, -3, -4, -1]
Tesouros Encontrados: [-1, -3, -4]

// Mapa 3
Entrada: [10, 10, 10, 5, 3]
Tesouros Encontrados: [10, 5, 3]
```
### 🎨 Características do Projeto
### 🪄 Design Mágico e Elegante

Interface temática com cores vibrantes (#FF69B4, #0c1016)
Fonte elegante Cinzel para títulos e Roboto para texto
Container glassmorphism com backdrop blur
Animações suaves e efeitos de brilho
Background personalizado com overlay de imagem

### 🎮 Botões Interativos com Efeito "Gooey"

Filtro SVG personalizado para efeito viscoso
10 bolhas animadas em cada botão
Animações fluidas com timing específico
Hover effects responsivos
Estados de loading visuais

## 📱 Layout Responsivo

Container fixo à esquerda em desktop
Botões centralizados horizontalmente
Layout adaptável para mobile (stack vertical)
Tamanhos proporcionais em diferentes telas
Navegação por teclado (Tab, Enter)

## 🔍 Funcionalidades Avançadas

Validação completa de entrada
Cálculo detalhado passo a passo
Resultado destacado com animação
Mensagens de erro contextualizadas
Estados visuais de loading

## 🚀 Como Executar o Projeto
📋 Pré-requisitos

Node.js >= 14.0.0
npm ou yarn

## 🛠️ Instalação

### Clone o repositório:
```
bash git clone https://github.com//luizfxdev/desafio_278.git
cd tesouros-sensei-kodokai
```
### Instale as dependências:
```
bash npm install
```
### Configure a estrutura:
```
bash mkdir images scss css
```


## 🎯 Scripts Disponíveis
```
bash# Compilar SCSS e assistir mudanças
npm run watch
```
### Compilar CSS (produção)
```
npm run build  
```
### Modo desenvolvimento (SCSS + servidor)
```
npm run dev
```
### Apenas servidor local
```
npm run serve
```

## 📁 Estrutura do Projeto
```
tesouros-sensei-kodokai/
├── images/
│   └── background.jpg          # Imagem de fundo (adicione sua imagem)
├── scss/
│   └── styles.scss            # Estilos em SCSS
├── css/
│   └── styles.css             # CSS compilado
├── script.js                  # Lógica do algoritmo
├── index.html                 # Interface principal
├── package.json               # Configurações do projeto
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Este arquivo
```

## 🧮 Como Funciona o Algoritmo

### 1. Processamento da Entrada
```
javascript

function processInput(inputString) {
    // Remove espaços, divide por vírgula e valida números
    const numbersArray = inputString
        .split(',')
        .map(str => str.trim())
        .filter(str => str !== '')
        .map(str => parseFloat(str));
    
    return numbersArray;
}
```
### 2. Busca pelos Tesouros
```
javascript

function findTopThreeUniqueNumbers(numbers) {
    // Passo 1: Remover duplicatas
    const uniqueNumbers = [...new Set(numbers)];
    
    // Passo 2: Ordenar do maior para menor
    const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);
    
    // Passo 3: Pegar os três maiores
    const topThree = sortedNumbers.slice(0, 3);
    
    return { original, unique, sorted, result: topThree };
}
```
## 3. Exibição Detalhada

### 🗂️ Números do Mapa Original
### 💎 Tesouros Únicos Identificados
### 📊 Ranking dos Tesouros
### 🏆 Os 3 Maiores Tesouros

## 🎨 Personalização
### 🎭 Alterando Cores
```
scss// Cores principais (em scss/styles.scss)
$prime: #FF69B4;    // Rosa vibrante dos botões
$second: #0c1016;   // Cor escura do texto
$primary: #9D4EDD;  // Roxo principal
$accent: #F72585;   // Rosa accent
$light: #E0AAFF;    // Roxo claro
```
## 🖼️ Background Personalizado
```
Substitua images/background.jpg
Ajuste a opacidade em styles.scss (linha opacity: 0.3)
```

## ⚡ Animações dos Botões
```
scss// Personalizar bolhas (em scss/styles.scss)
@for $bubble from 1 through 10 {
    &:nth-child(#{$bubble}) {
        $size: 25px;                                    // Tamanho das bolhas
        animation-delay: #{$bubble * 0.2}s;            // Delay entre bolhas
        animation: move-#{$bubble} #{3 + $bubble * 0.02}s infinite;
    }
}
```
## 🌟 Funcionalidades Técnicas
### 🔧 Tecnologias Utilizadas

***HTML5 Semântico com acessibilidade***
***SCSS/Sass para estilos avançados***
***JavaScript ES6+ moderno***
***CSS Grid/Flexbox para layout***
***SVG Filters para efeitos visuais***
***CSS Animations e Keyframes***

## 🎯 Compatibilidade

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Dispositivos móveis (iOS/Android)

## ♿ Acessibilidade

Contraste adequado de cores
Navegação por teclado (Tab, Enter)
Labels semânticos para leitores de tela
Foco visível em elementos interativos

### 🐛 Solução de Problemas
### ❗ Problemas Comuns

### 1. SCSS não compila:
```
bashnpm install sass --save-dev
npm run watch
```
### 2. Imagem de background não aparece:
```
Verifique se images/background.jpg existe
Confirme o caminho no CSS: url('../images/background.jpg')
```
### 3. Botões sem efeito gooey:
```
Verifique se o filtro SVG está presente no HTML
Confirme que filter: url('#gooey') está aplicado
```
### 4. Layout quebrado em mobile:
```
bash# Recompile o CSS
npm run build
```
## 🤝 Contribuição

Fork o projeto
Crie uma branch para sua feature (git checkout -b feature/NovaFuncionalidade)
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')
Push para a branch (git push origin feature/NovaFuncionalidade)
Abra um Pull Request

## 📜 Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.
👨‍💻 Autor
Desenvolvido com 💜 por [@luizfx.dev]

🐱 GitHub: @luizfxdev

💼 LinkedIn: https://www.linkedin.com/in/luizfxdev

📧 Email: luizfx.dev@gmail.com


🐉 "*Os maiores tesouros não são de ouro, mas de conhecimento e código elegante!*"
- Sensei Kodokai ⚡️

### 🙏 Agradecimentos

🎨 Design inspirado em interfaces mágicas e místicas
🎮 Animações baseadas em efeitos de jogos modernos
📚 Algoritmo educativo para ensino de JavaScript
🌟 Comunidade open source pelo suporte


<br>
<br>
<br>

<div align="center">
⭐ Se este projeto te ajudou, deixe uma estrela! ⭐
</div>
