// ==============================
// MENU MOBILE
// ==============================

function abrirMenu() {

    const menu = document.querySelector(".menu");

    menu.classList.toggle("ativo");

}


// ==============================
// FECHAR MENU AO CLICAR
// ==============================

const links = document.querySelectorAll(".menu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector(".menu").classList.remove("ativo");

    });

});


// ==============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ==============================

const elementos = document.querySelectorAll(
    ".card, .foto, .sobre, .video-section"
);


function verificarAnimacao() {

    const alturaTela = window.innerHeight;

    elementos.forEach(function(elemento) {

        const distanciaTopo =
            elemento.getBoundingClientRect().top;

        if (distanciaTopo < alturaTela - 100) {

            elemento.classList.add("aparecer");

        }

    });

}


window.addEventListener("scroll", verificarAnimacao);

verificarAnimacao();


// ==============================
// FORMULÁRIO
// ==============================

const formulario =
    document.getElementById("formulario");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    alert(
        "Obrigado, " +
        nome +
        "! Sua mensagem foi recebida."
    );

    formulario.reset();

});
