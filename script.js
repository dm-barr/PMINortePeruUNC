// ========================================
// CARRUSEL DE JUNTA DIRECTIVA + VIDEO + MODALES
// ========================================
document.addEventListener("DOMContentLoaded", function () {

// =====================================
    // CARRUSEL DE JUNTA DIRECTIVA
    // =====================================
    const track = document.querySelector(".carousel-track");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const dotsContainer = document.querySelector(".carousel-dots");

    if (track && nextBtn && prevBtn && dotsContainer) {
        const slides = Array.from(track.children);
        let currentSlide = 0;

        function getSlidesPerView() {
            const width = window.innerWidth;
            if (width >= 1024) return 3;
            if (width >= 768) return 2;
            return 1;
        }

        let slidesPerView = getSlidesPerView();
        const totalSlides = slides.length;
        function getTotalDots() {
            if (totalSlides === 0 || slidesPerView === 0) return 0;
            return Math.ceil(totalSlides / slidesPerView);
        }

        let totalDots = getTotalDots();

        function createDots() {
            dotsContainer.innerHTML = "";
            totalDots = getTotalDots();
            if (totalDots <= 1) return; 
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement("div");
                dot.classList.add("carousel-dot");
                if (i === 0) dot.classList.add("active");
                dotsContainer.appendChild(dot);
            }
        }

        createDots();
        const getDots = () => Array.from(dotsContainer.children);

        function updateCarousel() {
            if (slides.length === 0) return; 
            const slideWidth = slides[0].getBoundingClientRect().width;
            const gap = 30; 
            const moveAmount = -(currentSlide * (slideWidth + gap));
            track.style.transform = `translateX(${moveAmount}px)`;
            const activeDotIndex = Math.floor(currentSlide / slidesPerView);
            const safeActiveDotIndex = Math.max(0, Math.min(getDots().length - 1, activeDotIndex));

            getDots().forEach((dot, index) => {
                dot.classList.toggle("active", index === safeActiveDotIndex);
            });
        }
        
        function checkSlideBounds() {
            if (totalSlides === 0 || slidesPerView === 0) return; 
            const maxSlide = Math.max(0, totalSlides - slidesPerView);
            if (currentSlide > maxSlide) {
                currentSlide = maxSlide;
            }
            if (currentSlide < 0) {
                currentSlide = 0;
            }
        }

        nextBtn.addEventListener("click", () => {
            if (totalSlides === 0 || slidesPerView === 0) return;
            const maxSlide = totalSlides - slidesPerView;
            if (currentSlide < maxSlide) {
                currentSlide++;
            } else {
                currentSlide = 0; 
            }
            updateCarousel();
        });

        prevBtn.addEventListener("click", () => {
            if (totalSlides === 0 || slidesPerView === 0) return;
            const maxSlide = totalSlides - slidesPerView;
            if (currentSlide > 0) {
                currentSlide--;
            } else {
                currentSlide = maxSlide; 
            }
            updateCarousel();
        });

        dotsContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("carousel-dot")) {
                const index = getDots().indexOf(e.target);
                if (index !== -1) {
                    currentSlide = index * slidesPerView;
                    checkSlideBounds(); 
                    updateCarousel();
                }
            }
        });

        window.addEventListener("resize", () => {
            const oldSlidesPerView = slidesPerView;
            slidesPerView = getSlidesPerView();
            if (oldSlidesPerView !== slidesPerView) {
                currentSlide = 0; 
                createDots();
            }
            checkSlideBounds(); 
            updateCarousel();
        });

        let startX = 0;
        let isDragging = false;
        track.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        track.addEventListener("touchend", (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            if (Math.abs(diff) > 50) { 
                if (totalSlides === 0 || slidesPerView === 0) return;
                const maxSlide = totalSlides - slidesPerView;
                if (diff > 0 && currentSlide < maxSlide) { 
                    currentSlide++;
                } else if (diff < 0 && currentSlide > 0) {
                    currentSlide--;
                }
                updateCarousel();
            }
            isDragging = false;
        });
        checkSlideBounds();
        updateCarousel();
    }

    // ----- VIDEO -----
    const video = document.querySelector(".hero-video");
    if (video) {
        video.playbackRate = 0.75;
    }

    // ----- MODAL DE SESIONES -----
    const btnSesiones = document.querySelector(".btn-sesiones");
    const ventanaSesiones = document.getElementById("ventanaSesiones");
    const overlay = document.getElementById("overlay");
    const btnCerrar = document.getElementById("cerrarSesiones");

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
