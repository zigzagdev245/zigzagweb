(function () {
    function initPartnerSwiper() {
        var swiperEl = document.querySelector(".partnerSwiper");
        if (!swiperEl || typeof Swiper === "undefined") return;

        var partnerSwiper = new Swiper(".partnerSwiper", {
            loop: true,
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

        var logoLinks = document.querySelectorAll('.logo-item[href^="#"]');
        if (!logoLinks.length) return;

        logoLinks.forEach(function (link) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                var target = (link.getAttribute("href") || "").replace(/^#/, "");
                if (!target) return;

                var slides = partnerSwiper.slides;
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i] && slides[i].id === target) {
                        partnerSwiper.slideToLoop(i, 600);
                        swiperEl.scrollIntoView({ behavior: "smooth", block: "center" });
                        try {
                            history.replaceState(null, "", "#" + target);
                        } catch (err) {}
                        break;
                    }
                }
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPartnerSwiper, { once: true });
    } else {
        initPartnerSwiper();
    }
})();
