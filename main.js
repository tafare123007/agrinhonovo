document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle para abrir e fechar o menu responsivo
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link dentro dele (em dispositivos móveis)
    document.querySelectorAll('.nav-menu ul li a').forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60, // Considerando a altura do cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});
