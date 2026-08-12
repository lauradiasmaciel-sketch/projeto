function abrirMenu() {

    const menu = document.querySelector(".menu");

    menu.classList.toggle("ativo");

}


document.querySelectorAll(".menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector(".menu").classList.remove("ativo");

    });

});


document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

    this.reset();

});
