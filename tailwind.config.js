/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                'spin-neg': 'spin-neg 1s linear infinite',
                'spin-cog': 'spin-cog 500ms linear',
                'spin-cog-neg': 'spin-cog-neg 500ms linear',
            },
            keyframes: {
                'spin-neg': {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(-360deg)',
                    },
                },
                'spin-cog': {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(90deg)',
                    },
                },
                'spin-cog-neg': {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(-90deg)',
                    },
                },
            },
        },
    },
    plugins: [],
};