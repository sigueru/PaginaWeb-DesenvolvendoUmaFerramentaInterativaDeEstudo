let fontes = [
  'Arial', 'Georgia', 'Times New Roman', 'Verdana', 'Trebuchet MS',
  'Impact', 'Comic Sans MS', 'Tahoma', 'Lucida Console'
];
let currentIndex = 0;

function setup() {
  noCanvas();
  displayFlashcard(currentIndex);

  let nextButton = select('#next-button');
  nextButton.mousePressed(() => {
    currentIndex = (currentIndex + 1) % fontes.length;
    displayFlashcard(currentIndex);
  });
}

function displayFlashcard(index) {
  let container = select('#flashcard-container');
  container.html(''); // Limpa o conteúdo atual

  let flashcard = createDiv().addClass('flashcard').parent(container);
  createElement('p', `Esta é a fonte: ${fontes[index]}`).parent(flashcard).style('font-family', fontes[index]);
}
