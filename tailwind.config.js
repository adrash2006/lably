/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-blue': '#00f3ff',
                'dark-bg': '#0a0a0a',
            },
        },
        fontFamily: {
            sans: ['Poppins', 'Inter', 'sans-serif'],
            display: ['Outfit', 'sans-serif'],
        },
    },
    plugins: [],
}
