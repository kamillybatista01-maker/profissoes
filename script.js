document.addEventListener("DOMContentLoaded", () => {
    // 1. Controle do Menu Responsivo (Mobile)
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fecha o menu ao clicar em algum link no celular
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // 2. Animação das Barras do Gráfico de Mercado
    const bars = document.querySelectorAll(".bar-fill");
    const mercadoSection = document.getElementById("mercado");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bars.forEach(bar => {
                    const targetWidth = bar.getAttribute("data-width");
                    bar.style.width = targetWidth;
                });
            }
        });
    }, { threshold: 0.3 });

    if (mercadoSection) {
        observer.observe(mercadoSection);
    }
});