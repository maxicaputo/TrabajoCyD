const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Seleccionar todas las imágenes redondeadas
const roundImages = document.querySelectorAll('.round-image');

// Función para manejar la animación al hacer hover
roundImages.forEach(image => {
    // Efecto al pasar el mouse
    image.addEventListener('mouseenter', () => {
        image.classList.add('expanded');
    });

    // Efecto al quitar el mouse
    image.addEventListener('mouseleave', () => {
        image.classList.remove('expanded');
    });

    // Efecto al hacer click (útil para dispositivos móviles)
    image.addEventListener('click', () => {
        // Remover la clase expanded de todas las imágenes
        roundImages.forEach(img => {
            if (img !== image) {
                img.classList.remove('expanded');
            }
        });
        // Toggle la clase en la imagen clickeada
        image.classList.toggle('expanded');
    });
});

// Animación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    roundImages.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = '0';
            image.style.transform = 'translateY(20px)';
            requestAnimationFrame(() => {
                image.style.transition = 'all 0.5s ease';
                image.style.opacity = '1';
                image.style.transform = 'translateY(0)';
            });
        }, index * 200); // Retraso escalonado para cada imagen
    });
});

// Detección de scroll para animaciones
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

roundImages.forEach(image => {
    image.style.opacity = '0';
    image.style.transform = 'scale(0.8)';
    image.style.transition = 'all 0.5s ease';
    observer.observe(image);
});

