const buttons = document.querySelectorAll(".button-call");

buttons.forEach(button => {
  const content = button.querySelector(".part-content");
  const title = button.querySelector(".tittle-part");
  const image = button.querySelector(".image-part");

  if (!content || !title || !image) return;

  // estado inicial
  title.style.display = "none";
  title.style.opacity = "0";
  image.style.marginRight = "0";

  // quando entra no botão
  button.addEventListener("mouseenter", () => {
    title.style.display = "flex";
    setTimeout(() => {
      title.style.opacity = "1";
    }, 10);

    content.style.justifyContent = "space-around";
    image.style.marginRight = "10px";
  });

  // quando sai do botão
  button.addEventListener("mouseleave", () => {
    title.style.opacity = "0";

    // espera a opacidade desaparecer antes de esconder totalmente
    setTimeout(() => {
      title.style.display = "none";
    }, 150);

    content.style.justifyContent = "center";
    image.style.marginRight = "0";
  });
});
