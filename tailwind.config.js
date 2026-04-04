/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
    theme: {
        extend: {
            fontFamily: {
                'space-grotesk': ['Space Grotesk', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#a855f7', // Purple from the image
                secondary: '#bef264', // Lime from the image
                surface: '#0a0a0a', // Deep dark
                'surface-light': '#171717', // Gray dark
                'surface-elevated': '#262626',
            },
            boxShadow: {
                'hard': '4px 4px 0px 0px #000000',
                'hard-lg': '8px 8px 0px 0px #000000',
                'hard-xl': '12px 12px 0px 0px #000000',
            },
            borderWidth: {
                '4': '4px',
            },
            spacing: {
                '18': '4.5rem',
                '24': '6rem',
            }
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['dark'], // Using a simplified theme base
    },
}