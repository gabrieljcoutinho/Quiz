# 🧠 Quiz Interativo de Conhecimentos Gerais

Um jogo de perguntas e respostas dinâmico e visualmente atraente, desenvolvido com **HTML5**, **CSS3** (estética Neon) e **JavaScript**. O quiz conta com sistema de pontuação progressiva e níveis de dificuldade.

## 🚀 Funcionalidades

- **Banco de Questões:** 30 perguntas variadas (Geografia, História, Ciência, Artes, etc.).
- **Aleatoriedade:** As perguntas e as alternativas são embaralhadas a cada nova partida.
- **Níveis de Dificuldade:** Exibição visual do nível da questão (Fácil, Médio, Difícil) com cores temáticas.
- **Sistema de Pontuação:** - Cada questão vale inicialmente **100 pontos**.
  - **Bônus de Sequência:** A cada 4 acertos seguidos, o valor da próxima questão dobra!
  - **Reset de Combo:** Errar uma questão reseta o bônus e o valor volta para 100.
- **Feedback Visual:** Efeitos de cores e animações para respostas certas (verde) e erradas (vermelho).
- **Indicador Neon:** Contador de questões estilizado no topo.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura do container de jogo.
- **CSS3:** Estilização Neon, indicadores de status e efeitos de transição.
- **JavaScript (ES6):** Lógica do motor do jogo, manipulação de arrays (sort/random) e cronômetros de feedback.

## 🕹️ Como Jogar

1. Salve os arquivos `index.html`, `style.css` e `script.js` na mesma pasta.
2. Abra o `index.html` no seu navegador.
3. Selecione uma alternativa (o botão "Próxima" será habilitado).
4. Tente manter uma sequência de acertos para multiplicar sua pontuação!

## 📂 Estrutura de Arquivos

- `index.html`: Estrutura principal e importação de scripts.
- `style.css`: Responsável por todo o visual "glow" e responsividade.
- `script.js`: Contém o banco de dados de questões e toda a lógica de pontuação.

---
**Dica:** Fique de olho na mensagem de "Bônus" que aparece quando você acerta muitas seguidas!
