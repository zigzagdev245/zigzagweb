(function () {
    function initPartnerSwiper() {
        var swiperEl = document.querySelector(".partnerSwiper");
        if (!swiperEl || typeof Swiper === "undefined") return;
        var lenis = window.lenis || null;

        var partnerSwiper = new Swiper(".partnerSwiper", {
            loop: false,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            speed: 500,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        window.partnerSwiper = partnerSwiper;

        function updateActiveLogoFromSlide() {
            // Get the actual active slide element from DOM
            var activeSlide = partnerSwiper.slides[partnerSwiper.activeIndex];
            if (!activeSlide || !activeSlide.id) return;

            var targetId = activeSlide.id;
            document.querySelectorAll(".logo-item").forEach(function (logo) {
                logo.classList.remove("active");
                var href = logo.getAttribute("href") || "";
                if (href === "#" + targetId) {
                    logo.classList.add("active");
                }
            });
        }

        partnerSwiper.on("slideChange", updateActiveLogoFromSlide);
        partnerSwiper.on("init", updateActiveLogoFromSlide);

        var logoLinks = document.querySelectorAll('.logo-item[href^="#"]');
        if (!logoLinks.length) return;

        logoLinks.forEach(function (link) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                var target = (link.getAttribute("href") || "").replace(/^#/, "");
                if (!target) return;

                var slideIndex = -1;
                for (var i = 0; i < partnerSwiper.slides.length; i++) {
                    if (partnerSwiper.slides[i] && partnerSwiper.slides[i].id === target) {
                        slideIndex = i;
                        break;
                    }
                }

                if (slideIndex < 0) return;

                // Switch slide
                partnerSwiper.slideTo(slideIndex, 600, true);

                // Scroll to swiper with negative offset (up to introduction area)
                if (lenis) {
                    setTimeout(function () {
                        // Scroll to top of swiper element with extra upward offset
                        lenis.scrollTo(swiperEl, { offset: -200, duration: 0.8 });
                    }, 100);
                } else {
                    setTimeout(function () {
                        swiperEl.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                }

                try {
                    history.replaceState(null, "", "#" + target);
                } catch (err) {}
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPartnerSwiper, { once: true });
    } else {
        initPartnerSwiper();
    }
})();
