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

<<<<<<< HEAD

/*

    // ----- FORMULARIO DE VOLUNTARIADO EVENTOS(EMERGENTE) ----- (luego escala a google sheets)
const btnInscribirse = document.getElementById("btnInscribirse");
const formModal = document.getElementById("formModal");
const btnCerrarForm = document.getElementById("btnCerrarForm");
const form = document.getElementById("voluntarioForm");
=======
    // ----- MODAL DE SESIONES -----
    const btnSesiones = document.querySelector(".btn-sesiones");
    const ventanaSesiones = document.getElementById("ventanaSesiones");
    const overlay = document.getElementById("overlay");
    const btnCerrar = document.getElementById("cerrarSesiones");
>>>>>>> 968f8111429b28f5af58207d95f285f23d0b5ae1

    // Mostrar ventana
    btnSesiones.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el salto del enlace
        ventanaSesiones.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });

    // Cerrar ventana
    btnCerrar.addEventListener("click", () => {
        ventanaSesiones.classList.add("hidden");
        overlay.classList.add("hidden");
    });

    // Cerrar al hacer clic fuera del modal
    overlay.addEventListener("click", () => {
        ventanaSesiones.classList.add("hidden");
        overlay.classList.add("hidden");
    });

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

<<<<<<< HEAD
// Enviar formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por inscribirte! Pronto nos pondremos en contacto contigo.");
    form.reset();
    formModal.classList.add("oculto");
});
*/



// ========================================
// ✅ NUEVO MODAL: CALENDARIO PM LEARNING WEEK
// ========================================
const btnCalendario = document.getElementById("btnCalendario");
const modalCalendario = document.getElementById("modalCalendario");
const btnCerrarCalendario = document.getElementById("btnCerrarCalendario");

// Asegurarse de que el modal esté oculto al cargar
modalCalendario.classList.add("oculto");

// Abrir modal al hacer clic en "Ver Calendario"
btnCalendario.addEventListener("click", () => {
    modalCalendario.classList.remove("oculto");
});

// Cerrar modal con el botón X
btnCerrarCalendario.addEventListener("click", () => {
    modalCalendario.classList.add("oculto");
});

// Cerrar modal al hacer clic fuera del contenido
modalCalendario.addEventListener("click", (e) => {
    if (e.target === modalCalendario) {
        modalCalendario.classList.add("oculto");
    }
});

// Cerrar modal con la tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalCalendario.classList.contains("oculto")) {
        modalCalendario.classList.add("oculto");
    }
});





=======
    // ----- FORMULARIO DE RECLUTAMIENTO DE VOLUNTARIOS -----
    const btnReclutamiento = document.getElementById('btnReclutamiento');
    const modalReclutamiento = document.getElementById('formModalReclutamiento');
    const btnCerrarReclu = document.getElementById('btnCerrarReclu');
>>>>>>> 968f8111429b28f5af58207d95f285f23d0b5ae1

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
