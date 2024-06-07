/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'yellow-card': '#ffbf39',
                'light-gray': '#F4F4F4',
                yellow: '#FFB54A',
                'yellow-500': '#ffc000',
                violet: '#8D47F8',
                'light-violet': '#F7F0FF',
                'dark-violet': '#3F1979',
                mint: '#D8FFF1',
                button: '#1DF19B',
                'button-text': 'white',
                'light-green': '#B7F3DD',
                emerald: '#0dc279ff',
                green: '#0DC279',
                'dark-green': '#005B36',
            },
            backgroundColor: {
                footer: '#340065',
            },
        },
    },
    plugins: [],
};
