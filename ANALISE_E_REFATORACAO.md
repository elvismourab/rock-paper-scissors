# Análise e Refatoração do Projeto Jankenpon

Este documento resume os problemas encontrados na implementação original do jogo Jankenpon e a abordagem utilizada para refatorar o código, aplicando um novo tema visual e melhorando a lógica do jogo.

---

## 1. Problemas Encontrados

A análise inicial revelou problemas em três áreas principais: CSS, HTML e JavaScript.

### a. CSS (`styles.css`)

- **Sintaxe de Cor Inválida:** As variáveis de cor no `:root` estavam sem o prefixo `#` (ex: `dbf73b` em vez de `#dbf73b`), o que impedia seu uso.
- **Conflitos de Estilo:** A regra `background-color: red;` no seletor universal (`*`) estava sobrescrevendo todas as outras cores de fundo, dificultando a estilização.
- **Tema Inconsistente:** A paleta de cores original e o uso de cores como `lightblue` e `yellow` não correspondiam à estetica de "fliperama" ou "tela de computador antigo" desejada.
- **Falta de Padronização:** Havia uso de cores estáticas em vez das variáveis declaradas.

### b. HTML (`index.html`)

- **Estrutura Inválida:** Elementos de conteúdo como `<h1>` e `<div>` estavam fora da tag `<body>`, o que torna o HTML inválido.
- **Conteúdo Dinâmico Ineficiente:** O placar (`<div id="score">`) era totalmente recriado via JavaScript a cada rodada, o que é ineficiente e mistura estrutura com lógica de forma desnecessária.

### c. JavaScript (`script.js`)

- **Seleção Não Aleatória:** A função `getComputerChoice` usava `Math.random()` com intervalos (`<= 0.33`, `>= 0.66`) que resultavam em uma distribuição de probabilidade desigual para as três opções (pedra, papel e tesoura).
- **Manipulação do DOM Ineficiente:** O script criava e adicionava novos elementos HTML a cada jogada, em vez de simplesmente atualizar o conteúdo dos elementos existentes.
- **Lógica de Eventos:** O listener de clique estava atrelado ao contêiner `#options` de forma genérica, embora funcionasse por delegação de eventos.

---

## 2. Abordagem da Refatoração

Para solucionar os problemas, o projeto foi refatorado da seguinte maneira:

### a. CSS (`styles.css`)

- **Criação de um Tema Retrô:**
    - Uma nova paleta de cores com tons de verde, âmbar e preto foi definida em `:root` para criar uma atmosfera de "fliperama" ou monitor antigo.
    - Foi adicionada uma fonte do Google (`VT323`) para reforçar a estética.
    - Um efeito de "scanline" foi aplicado ao fundo da página para simular uma tela de monitor CRT.
- **Correção e Padronização:**
    - A sintaxe das variáveis de cor foi corrigida.
    - Todas as cores estáticas foram substituídas pelas novas variáveis, garantindo consistência.
    - Regras em conflito foram removidas.

### b. HTML (`index.html`)

- **Estrutura Semântica:** O HTML foi corrigido para que todo o conteúdo ficasse dentro do `<body>`.
- **Placar Estático:** Foi criada uma estrutura estática para o placar e as mensagens, com `<span>` e `<h2>` contendo IDs específicos (`#player-score`, `#result-message`, etc.). Isso separa a estrutura da lógica e melhora o desempenho.

### c. JavaScript (`script.js`)

- **Lógica de Seleção Justa:** A função `getComputerChoice` foi reescrita para sortear um índice de um array de opções (`['rock', 'paper', 'scissors']`), garantindo uma distribuição de probabilidade perfeitamente uniforme.
- **Atualizações Eficientes de UI:** O script foi modificado para apenas atualizar a propriedade `textContent` dos elementos estáticos do placar, em vez de recriá-los.
- **Lógica de Jogo Aprimorada:**
    - O código foi reorganizado em funções com responsabilidades claras: `playRound`, `updateUI`, `checkForWinner` e `resetGame`.
    - Foi implementada uma funcionalidade de "jogar novamente" que reinicia o estado do jogo após um vencedor ser declarado.
