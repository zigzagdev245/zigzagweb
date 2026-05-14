tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // 🔵 PRIMARY
                primary: "#c9c6c5",
                "on-primary": "#313030",
                "primary-container": "#0a0a0a",
                "on-primary-container": "#7b7979",
                "primary-fixed": "#e5e2e1",
                "primary-fixed-dim": "#c9c6c5",
                "on-primary-fixed": "#1c1b1b",
                "on-primary-fixed-variant": "#474646",

                // 🟣 SECONDARY
                secondary: "#b8c3ff",
                "on-secondary": "#002388",
                "secondary-container": "#0043eb",
                "on-secondary-container": "#c6ceff",
                "secondary-fixed": "#dde1ff",
                "secondary-fixed-dim": "#b8c3ff",
                "on-secondary-fixed": "#001356",
                "on-secondary-fixed-variant": "#0035be",

                // 🟠 TERTIARY
                tertiary: "#c8c6c5",
                "on-tertiary": "#313030",
                "tertiary-container": "#0a0a0a",
                "on-tertiary-container": "#7a7979",
                "tertiary-fixed": "#e5e2e1",
                "tertiary-fixed-dim": "#c8c6c5",
                "on-tertiary-fixed": "#1c1b1b",
                "on-tertiary-fixed-variant": "#474746",

                // ⚫ SURFACE / BACKGROUND
                background: "#051424",
                "on-background": "#d4e4fa",

                surface: "#051424",
                "surface-dim": "#051424",
                "surface-bright": "#2c3a4c",

                "surface-container-lowest": "#010f1f",
                "surface-container-low": "#0d1c2d",
                "surface-container": "#122131",
                "surface-container-high": "#1c2b3c",
                "surface-container-highest": "#273647",

                "surface-variant": "#273647",
                "on-surface": "#d4e4fa",
                "on-surface-variant": "#c4c7c7",

                // 🔄 INVERSE
                "inverse-surface": "#d4e4fa",
                "inverse-on-surface": "#233143",
                "inverse-primary": "#5f5e5e",

                // ❗ ERROR
                error: "#ffb4ab",
                "on-error": "#690005",
                "error-container": "#93000a",
                "on-error-container": "#ffdad6",

                // ⚪ OUTLINE
                outline: "#8e9192",
                "outline-variant": "#444748",

                // ✨ OTHER
                "surface-tint": "#c9c6c5",
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
                epilogue: ["Epilogue"],
                headline: ["Epilogue"],
                display: ["Epilogue"],
                body: ["Inter"],
                label: ["Inter"],
            },
            fontSize: {
                "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
                "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
                "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
                "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
                "display-md": ["48px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
                "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }],
            },
        },
    },
};
