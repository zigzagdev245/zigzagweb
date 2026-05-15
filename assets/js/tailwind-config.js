tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // 🧱 SURFACE & BACKGROUND (Dark UI layers)
                // Page → Section → Card → Panel → Modal
                background: "#051424", // Page background
                "on-background": "#d4e4fa", // Text on page background

                surface: "#051424", // Default surface
                "surface-dim": "#051424", // Dimmed surface
                "surface-bright": "#2c3a4c", // Brighter elevated surface

                "surface-container-lowest": "#010f1f", // Deepest layer
                "surface-container-low": "#0d1c2d", // Low card / section
                "surface-container": "#122131", // Default card background
                "surface-container-high": "#1c2b3c", // Panel / sidebar
                "surface-container-highest": "#273647", // Modal / popover

                "surface-variant": "#273647", // Slightly different block

                "on-surface": "#d4e4fa", // Main text color
                "on-surface-variant": "#c4c7c7", // Secondary text color

                "surface-tint": "#c9c6c5", // Tint used for elevation effect

                // 🔵 PRIMARY (Main brand / CTA / Highlight)
                primary: "#c9c6c5", // Primary button / highlight
                "on-primary": "#313030", // Text on primary

                "primary-container": "#0a0a0a", // Primary content block
                "on-primary-container": "#7b7979",

                "primary-fixed": "#e5e2e1", // Stable across light/dark
                "primary-fixed-dim": "#c9c6c5",
                "on-primary-fixed": "#1c1b1b",
                "on-primary-fixed-variant": "#474646",

                // 🟣 SECONDARY (Supporting UI elements)
                // Chips / Tabs / Badges / Secondary buttons
                secondary: "#b8c3ff",
                "on-secondary": "#002388",

                "secondary-container": "#0043eb",
                "on-secondary-container": "#c6ceff",

                "secondary-fixed": "#dde1ff",
                "secondary-fixed-dim": "#b8c3ff",
                "on-secondary-fixed": "#001356",
                "on-secondary-fixed-variant": "#0035be",

                // 🟠 TERTIARY (Neutral accent / Content blocks)
                // Widgets / Sections / Dashboard blocks
                tertiary: "#c8c6c5",
                "on-tertiary": "#313030",

                "tertiary-container": "#0a0a0a",
                "on-tertiary-container": "#7a7979",

                "tertiary-fixed": "#e5e2e1",
                "tertiary-fixed-dim": "#c8c6c5",
                "on-tertiary-fixed": "#1c1b1b",
                "on-tertiary-fixed-variant": "#474746",

                // 🔄 INVERSE (For tooltip / snackbar on dark)
                // Light surface on dark background
                "inverse-surface": "#d4e4fa",
                "inverse-on-surface": "#233143",
                "inverse-primary": "#5f5e5e",

                // ❗ ERROR (Validation / Alerts)
                error: "#ffb4ab",
                "on-error": "#690005",

                "error-container": "#93000a",
                "on-error-container": "#ffdad6",

                // ⚪ OUTLINE (Borders / Dividers / Inputs)
                outline: "#8e9192",
                "outline-variant": "#444748",
            },
            borderRadius: {
                DEFAULT: "1rem",
                lg: "2rem",
                xl: "3rem",
                full: "9999px",
            },
            spacing: {
                gutter: "32px",
                "container-max": "1280px",
                "stack-md": "24px",
                "margin-x": "64px",
                "stack-lg": "48px",
                "stack-sm": "12px",
                "section-padding": "120px",
            },
            fontFamily: {
                display: ["Epilogue"],
                epilogue: ["Epilogue"],
                headline: ["Epilogue"],
                body: ["Inter"],
                label: ["Inter"],
            },
            fontSize: {
                "display-lg": ["clamp(40px, 4vw + 1rem, 72px)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
                "display-md": ["clamp(32px, 3vw + 1rem, 48px)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
                "display-sm": ["clamp(32px, 2.5vw + 1rem, 40px)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],

                "headline-lg": ["clamp(28px, 2vw + 1rem, 40px)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
                "headline-md": ["clamp(24px, 1.5vw + 1rem, 32px)", { lineHeight: "1.3", fontWeight: "600" }],
                "headline-sm": ["clamp(20px, 1vw + 1rem, 24px)", { lineHeight: "1.4", fontWeight: "600" }],

                "body-lg": ["clamp(16px, 0.8vw + 0.5rem, 17px)", { lineHeight: "1.6", fontWeight: "400" }],
                "body-md": ["clamp(14px, 0.5vw + 0.75rem, 16px)", { lineHeight: "1.6", fontWeight: "400" }],
                "body-sm": ["clamp(12px, 0.3vw + 0.75rem, 14px)", { lineHeight: "1.5", fontWeight: "400" }],

                "label-md": ["14px", { lineHeight: "1.2", fontWeight: "500" }],
                "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600", textTransform: "uppercase" }],
            },
        },
    },
};
