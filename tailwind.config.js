/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2e4c',
          dark: '#0f1a2d',
          light: '#2a4366',
        },
        grey: {
          DEFAULT: '#6b7280',
          dark: '#4b5563',
          light: '#9ca3af',
        },
        wood: {
          DEFAULT: '#c48a3f',
          dark: '#a16b20',
          light: '#e1ac69',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to right, rgba(26, 46, 76, 0.9), rgba(107, 114, 128, 0.85))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};