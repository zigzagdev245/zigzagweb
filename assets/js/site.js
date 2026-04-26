(function () {
    var SCROLL_TOP_THRESHOLD = 4;

    // Header trong suốt khi ở top, và có nền + blur khi scroll xuống
    function applyHeaderState(headerEl) {
        var atTop = window.scrollY <= SCROLL_TOP_THRESHOLD;

        headerEl.classList.toggle("bg-transparent", atTop);
        headerEl.classList.toggle("border-transparent", atTop);
        headerEl.classList.toggle("backdrop-blur-0", atTop);

        headerEl.classList.toggle("bg-black/40", !atTop);
        headerEl.classList.toggle("border-white/10", !atTop);
        headerEl.classList.toggle("backdrop-blur-xl", !atTop);
    }

    function initHeaderEffects() {
        var headers = document.querySelectorAll("[data-site-header]");
        if (!headers.length) return;

        var sync = function () {
            headers.forEach(applyHeaderState);
        };

        sync();
        window.addEventListener("scroll", sync, { passive: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initHeaderEffects, { once: true });
    } else {
        initHeaderEffects();
    }
})();
