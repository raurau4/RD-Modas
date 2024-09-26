const buttons = document.querySelectorAll('.product .btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});
