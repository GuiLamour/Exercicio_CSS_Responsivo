document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const selectedSize = prompt("Ok! Produto selecionado. Digite o tamanho do quadro (49, 50 ou 51):");
            
            if (selectedSize === "49" || selectedSize === "50" || selectedSize === "51") {
                alert("Seu produto foi escolhido! Parabéns!");
            } else {
                alert("Tamanho inválido. Por favor, insira um dos valores válidos: 49, 50 ou 51.");
            }
        });
    });
});
