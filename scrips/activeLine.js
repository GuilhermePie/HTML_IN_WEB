textArea.addEventListener('input', highlightCurrentLine);
textArea.addEventListener('click', highlightCurrentLine);
textArea.addEventListener('keyup', highlightCurrentLine);

function highlightCurrentLine() {
  const text = textArea.value;
  const cursorPosition = textArea.selectionStart;

  // Obter o índice da linha atual
  const lines = text.split('\n');
  let charCount = 0;
  let currentLineIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    charCount += lines[i].length + 1;
    if (cursorPosition < charCount) {
      currentLineIndex = i;
      break;
    }

  }

  // Calcular a posição e altura da linha atual
  const lineHeight = parseFloat(window.getComputedStyle(textArea).lineHeight);
  const paddingTop = parseFloat(window.getComputedStyle(textArea).paddingTop);
  const highlightY = currentLineIndex * lineHeight + paddingTop - textArea.scrollTop;

  // Atualizar o fundo do textarea com o destaque
  textArea.style.background = `
    linear-gradient(to bottom, 
    transparent ${highlightY}px, 
    #eee ${highlightY}px, 
    #eee ${highlightY + lineHeight}px, 
    transparent ${highlightY + lineHeight}px)
  `;
}
