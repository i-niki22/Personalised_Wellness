import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F9F8F6",
                foreground: "#2D2D2D",
                primary: {
                    DEFAULT: "#8DA399",
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#C5A059",
                    foreground: "#FFFFFF",
                },
                muted: "#E0E0E0",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'subtle-gradient': 'linear-gradient(to bottom right, #F9F8F6, #F0F2F0)',
            },
        },
    },
    plugins: [],
};
export default config;
