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

    const btn = document.getElementById("backToTop");

    if (btn) {
        const showClasses = ["opacity-100", "translate-y-0", "pointer-events-auto"];
        const hideClasses = ["opacity-0", "translate-y-4", "pointer-events-none"];

        const onScrollBtn = () => {
            if (window.scrollY > 300) {
                btn.classList.remove(...hideClasses);
                btn.classList.add(...showClasses);
            } else {
                btn.classList.remove(...showClasses);
                btn.classList.add(...hideClasses);
            }
        };

        window.addEventListener("scroll", onScrollBtn, { passive: true });
        onScrollBtn();

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function scrollToTopAnimated(duration) {
            var start = window.scrollY;
            var startTime = performance.now();

            function step(now) {
                var elapsed = now - startTime;
                var t = Math.min(1, elapsed / duration);
                var eased = easeInOutCubic(t);
                window.scrollTo(0, Math.floor(start * (1 - eased)));
                if (t < 1) requestAnimationFrame(step);
            }

            requestAnimationFrame(step);
        }

        btn.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToTopAnimated(450);
        });
    }

    function init() {
        initHeaderEffects();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
