let slideIndex = 0; // Índice inicial do slide

function showSlides() {
  const slides = document.querySelectorAll(".slide");

  // Esconde todos os slides
  slides.forEach(slide => slide.style.display = "none");

  // Incrementa o índice circularmente
  slideIndex = (slideIndex + 1) % slides.length;

  // Exibe o slide atual
  slides[slideIndex].style.display = "block";
}

// Inicia o slideshow
setInterval(showSlides, 3000);