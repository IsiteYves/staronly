import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3b5bdb',
                    dark: '#364fc7',
                    light: '#5c7cfa',
                },
                accent: {
                    cyan: '#22b8cf',
                    purple: '#7950f2',
                },
            },
            fontFamily: {
                sans: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
                body: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
