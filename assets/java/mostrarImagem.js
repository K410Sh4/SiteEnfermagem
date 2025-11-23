let option = 1;
let autoplayInterval;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const title = document.getElementById("help-title");
const bannerFrame = document.getElementById("banner-frame");

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

const data = [
    {
        name: "Parada Cardíaca",
        bg: "rgba(138, 1, 1, 0.55)"
    },
    {
        name: "Envenenamento",
        bg: "rgba(1, 138, 8, 0.55)"
    },
    {
        name: "Engasgo",
        bg: "rgba(1, 138, 138, 0.55)"
    }
];
function typeWriter(text) {
    title.textContent = "";
    let i = 0;
    const speed = 40;

    function typing() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
function updateCarousel(direction = "right") {
    slides.forEach(slide => {
        slide.classList.remove("center", "enter-right", "enter-left", "active");
    });

    dots.forEach(dot => dot.classList.remove("active"));

    const index = option - 1;

    const activeSlide = slides[index];
    if (direction === "right") {
        activeSlide.classList.add("enter-right");
        setTimeout(() => activeSlide.classList.add("center"), 20);
    } else {
        activeSlide.classList.add("enter-left");
        setTimeout(() => activeSlide.classList.add("center"), 20);
    }

    activeSlide.classList.add("active");

    dots[index].classList.add("active");

    typeWriter(data[index].name);

    // Atualiza cor do fundo
    bannerFrame.style.background = data[index].bg;
}
arrowRight.onclick = () => {
    option++;
    if (option > slides.length) option = 1;
    updateCarousel("right");
    resetAutoplay();
};

arrowLeft.onclick = () => {
    option--;
    if (option < 1) option = slides.length;
    updateCarousel("left");
    resetAutoplay();
};
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const id = Number(dot.dataset.id);
        if (id !== option) {
            const direction = id > option ? "right" : "left";
            option = id;
            updateCarousel(direction);
            resetAutoplay();
        }
    });
});
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        arrowRight.click();
    }, 4000);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}
updateCarousel();
startAutoplay();
