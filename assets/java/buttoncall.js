const buttons = document.querySelectorAll(".button-call");

buttons.forEach(button => {
  // ao carregar, esconde os títulos e centraliza
  const title = button.querySelector(".tittle-part");
  const content = button.querySelector(".part-content");
  
  if (title && content) {
    title.style.display = "none";
    content.style.justifyContent = "center";
    content.style.width = "30%";
  }

  // adiciona evento hover
  button.addEventListener("mouseover", () => {
    title.style.display = "flex";
    content.style.justifyContent = "space-around";
    content.style.justifyItems = "center";
    content.style.width = "100%";
  });

  // quando o mouse sai, volta ao normal
  button.addEventListener("mouseout", () => {
    title.style.display = "none";
    content.style.justifyContent = "center";
    content.style.justifyItems = "center";
    content.style.width = "30%";
  });
});
