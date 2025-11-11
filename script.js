// ========================================
// CARRUSEL DE JUNTA DIRECTIVA + VIDEO + MODALES
// ========================================
document.addEventListener("DOMContentLoaded", function () {

    // ----- CARRUSEL -----
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    if (track && slides.length > 0) {
        // Crear indicadores
        const indicatorsContainer = document.getElementById('carouselIndicators');
        if (indicatorsContainer) {
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('carousel-indicator');
                if (i === 0) indicator.classList.add('active');
                indicator.onclick = () => goToSlide(i);
                indicatorsContainer.appendChild(indicator);
            }
        }

        function moveCarousel(direction) {
            currentSlide += direction;
            if (currentSlide < 0) currentSlide = totalSlides - 1;
            else if (currentSlide >= totalSlides) currentSlide = 0;
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

        window.moveCarousel = moveCarousel;
        window.goToSlide = goToSlide;

        // Auto-avance opcional (cada 5 segundos)
        // setInterval(() => moveCarousel(1), 5000);
    }

    // ----- VIDEO -----
    const video = document.querySelector(".hero-video");
    if (video) {
        video.playbackRate = 0.75;
    }

    // ----- FORMULARIO DE VOLUNTARIADO EVENTOS -----
    const btnInscribirse = document.getElementById("btnInscribirse");
    const formModal = document.getElementById("formModal");
    const btnCerrarForm = document.getElementById("btnCerrarForm");
    const form = document.getElementById("voluntarioForm");

    if (btnInscribirse && formModal && btnCerrarForm && form) {
        formModal.classList.add("oculto");

        btnInscribirse.addEventListener("click", () => {
            formModal.classList.remove("oculto");
        });

        btnCerrarForm.addEventListener("click", () => {
            formModal.classList.add("oculto");
        });

        formModal.addEventListener("click", (e) => {
            if (e.target === formModal) {
                formModal.classList.add("oculto");
            }
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("¡Gracias por inscribirte! Pronto nos pondremos en contacto contigo.");
            form.reset();
            formModal.classList.add("oculto");
        });
    }

    // ----- FORMULARIO DE RECLUTAMIENTO DE VOLUNTARIOS -----
    const btnReclutamiento = document.getElementById('btnReclutamiento');
    const modalReclutamiento = document.getElementById('formModalReclutamiento');
    const btnCerrarReclu = document.getElementById('btnCerrarReclu');

    if (btnReclutamiento && modalReclutamiento && btnCerrarReclu) {
        btnReclutamiento.addEventListener('click', () => {
            modalReclutamiento.classList.remove('oculto');
        });

        btnCerrarReclu.addEventListener('click', () => {
            modalReclutamiento.classList.add('oculto');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modalReclutamiento) {
                modalReclutamiento.classList.add('oculto');
            }
        });
    }

});
