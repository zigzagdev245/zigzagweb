(function () {
    function initGlide() {
        if (typeof window.Glide !== "function") {
            return;
        }

        var glideEls = document.querySelectorAll(".glide");
        if (!glideEls || !glideEls.length) return;

        glideEls.forEach(function (_, idx) {
            try {
                var selector = ".glide";
                // If multiple glides exist, target by index via nth-of-type.
                if (glideEls.length > 1) {
                    selector = ".glide:nth-of-type(" + (idx + 1) + ")";
                }

                var glide = new window.Glide(selector, {
                    type: "carousel",
                    perView: 3,
                    gap: 32,
                    focusAt: "center",
                    autoplay: 4000,
                    hoverpause: true,
                    breakpoints: {
                        1024: { perView: 2, gap: 24 },
                        768: { perView: 1, gap: 16 },
                    },
                });

                glide.mount();
            } catch (e) {
                console.warn("Glide init error", e);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initGlide, { once: true });
    } else {
        initGlide();
    }
})();
