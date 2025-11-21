let option = 0;

const card1 = document.getElementById("card-help-1");
const card2 = document.getElementById("card-help-2");
const card3 = document.getElementById("card-help-3");
const card4 = document.getElementById("card-help-4");
const card5 = document.getElementById("card-help-5");
const cards = document.querySelectorAll(".help-wrapper");

function mostrarApenas(opcao) {
    cards.forEach(card => {
        if (card.dataset.option === opcao.toString()) {
            //parte formatativa
            card.style.width="100%";
            card.style.display = "block";
            card.style.tansition = "0ms";
            //parte visual
            
        } else {
            //parte formatativa
            card.style.display = "none";
            card.style.tansition = "0ms";
        }
    });
}

function select(event) {
    const opcao = event.currentTarget.dataset.option;
    mostrarApenas(opcao);
}

function resetar() {
    // Mostra todos novamente
    cards.forEach(card => {
        card.style.width="20%";
        card.style.display = "block";
        card.style.tansition = "0ms";
    });
}

// Quando entra com o mouse = ativa
cards.forEach(card => {
    card.addEventListener("mouseenter", select);
});

// Quando sai com o mouse = volta ao normal
cards.forEach(card => {
    card.addEventListener("mouseleave", resetar);
});