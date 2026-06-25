/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#FFFDF6',
        primary: '#1967D2',
        secondary: '#E8710A',
        success: '#1E8E3E',
        ink: '#0D0D0D',
        muted: '#5F6368',
        'blue-light': '#D2E3FC',
        'orange-light': '#FDE7CC',
        'green-light': '#CEEAD6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neo: '4px 4px 0px #0D0D0D',
        'neo-hover': '6px 6px 0px #0D0D0D',
        'neo-sm': '3px 3px 0px #0D0D0D',
        'neo-sm-hover': '5px 5px 0px #0D0D0D',
        'neo-lg': '6px 6px 0px #0D0D0D',
        'neo-lg-hover': '8px 8px 0px #0D0D0D',
      },
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(0.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-0.5rem)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.5s ease-out',
        fadeOut: 'fadeOut 0.5s ease-in',
        wave: 'wave 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
