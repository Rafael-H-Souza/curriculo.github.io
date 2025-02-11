// Navegação suave entre seções
const menuLinks = document.querySelectorAll(".menu-header a");
menuLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Exemplo de interação dinâmica para exibir detalhes ao passar o mouse
const jobCards = document.querySelectorAll(".job");
jobCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#f0f8ff";
  });
  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "white";
  });
});


const contactIcons = document.querySelectorAll(".footer-column a");
contactIcons.forEach(icon => icon.addEventListener("click", showContactMessage));

// Adiciona animação de fade-in quando a página é carregada
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});