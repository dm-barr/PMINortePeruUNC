// ========================================
// CARRUSEL DE JUNTA DIRECTIVA
// ========================================
let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Crear indicadores
const indicatorsContainer = document.getElementById('carouselIndicators');
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.onclick = () => goToSlide(i);
    indicatorsContainer.appendChild(indicator);
}

function moveCarousel(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Actualizar indicadores
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// ========================================
// MOSTRAR SECCIONES AL HACER SCROLL (MÓVIL)
// ========================================
function initMobileScrollBehavior() {
    // Solo aplicar en dispositivos móviles
    if (window.innerWidth <= 768) {
        const sections = document.querySelectorAll('#vision-mision, #ejes, #junta, #eventos, #contacto');
        const footer = document.querySelector('.footer');
        let sectionsVisible = false;

        // Detectar scroll
        window.addEventListener('scroll', function() {
            const heroHeight = document.querySelector('.hero').offsetHeight;
            const scrollPosition = window.scrollY;

            // Si el usuario hace scroll más allá del hero, mostrar todas las secciones
            if (scrollPosition > heroHeight * 0.3 && !sectionsVisible) {
                sectionsVisible = true;
                sections.forEach(section => {
                    section.classList.add('visible');
                });
                if (footer) {
                    footer.classList.add('visible');
                }
            }
        });

        // También mostrar secciones cuando se hace clic en el menú
        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                sectionsVisible = true;
                sections.forEach(section => {
                    section.classList.add('visible');
                });
                if (footer) {
                    footer.classList.add('visible');
                }
            });
        });
    }
}

// ========================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ========================================
function initSmoothScroll() {
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Cerrar menú móvil si está abierto
                const menuToggle = document.getElementById('menu-toggle');
                if (menuToggle) {
                    menuToggle.checked = false;
                }
                
                // Scroll suave
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// INICIALIZAR AL CARGAR LA PÁGINA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initMobileScrollBehavior();
    initSmoothScroll();
    
    // Recalcular al cambiar tamaño de ventana
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recargar página si cambia de móvil a desktop o viceversa
            location.reload();
        }, 250);
    });
});

// ========================================
// CERRAR MENÚ AL HACER CLIC FUERA
// ========================================
document.addEventListener('click', function(event) {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menuToggle.checked) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menuToggle.checked = false;
        }
    }
});
