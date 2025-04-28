window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const floatingButton = document.getElementById('floating-button');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Verifica se a rolagem já atingiu o final da página
    if (scrollY >= scrollHeight) {
        floatingButton.style.bottom = '20px'; // Posiciona o botão como estivesse no final
    } else {
        // Define a posição do botão com base na rolagem
        floatingButton.style.bottom = `20px`;  // Ajusta o valor para controlar a distância do fundo
    }
});