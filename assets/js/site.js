(function () {
    var SCROLL_TOP_THRESHOLD = 4;
    var lenis = null;

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

    function initLenis() {
        if (typeof window.Lenis !== "function") {
            console.warn("Lenis is not loaded. Smooth scrolling features are disabled.");
            return null;
        }

        lenis = new window.Lenis({
            duration: 1.1,
            smoothWheel: true,
            smoothTouch: false,
            easing: function (t) {
                return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
            },
        });

        // Make lenis globally accessible
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return lenis;
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

        btn.addEventListener("click", function (e) {
            e.preventDefault();
            if (!lenis) return;
            lenis.scrollTo(0, { duration: 0.6 });
        });
    }

    function init() {
        initLenis();
        initHeaderEffects();
        initMobileMenu();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            var href = this.getAttribute("href");
            if (!href || href === "#") return;

            var targetId = href.substring(1);
            var target = document.getElementById(targetId);
            if (!target) return;

            if (!lenis) return;

            e.preventDefault();

            var headerEl = document.querySelector("[data-site-header]");
            var headerOffset = headerEl ? headerEl.offsetHeight : 0;

            lenis.scrollTo(target, {
                offset: -(headerOffset + 8),
                duration: 1,
            });

            if (history.pushState) {
                history.pushState(null, "", href);
            }
        });
    });

    // Mobile menu toggle (initialized after DOM is ready)
    function initMobileMenu() {
        var mobileBtn = document.getElementById("mobileMenuBtn");
        var mobileMenu = document.getElementById("mobileMenu");
        if (!mobileBtn || !mobileMenu) return;

        function openMobileMenu() {
            mobileMenu.classList.remove("hidden");
            mobileBtn.classList.add("menu-open");
            document.body.classList.add("overflow-hidden");
            mobileBtn.setAttribute("aria-expanded", "true");
        }

        function closeMobileMenu() {
            mobileMenu.classList.add("hidden");
            mobileBtn.classList.remove("menu-open");
            document.body.classList.remove("overflow-hidden");
            mobileBtn.setAttribute("aria-expanded", "false");
        }

        mobileBtn.addEventListener("click", function (e) {
            e.preventDefault();
            if (mobileBtn.classList.contains("menu-open")) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMobileMenu);
        });

        mobileMenu.addEventListener("click", function (e) {
            if (e.target === mobileMenu) closeMobileMenu();
        });

        // Close menu on Escape key
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
                closeMobileMenu();
            }
        });
    }
})();
