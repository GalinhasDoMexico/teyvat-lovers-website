document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 20; i++) {
    const folha = document.createElement("div");
    folha.classList.add("folha");
    folha.style.left = Math.random() * window.innerWidth + "px";
    folha.style.animationDuration = 5 + Math.random() * 10 + "s";
    folha.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(folha);
  }
});