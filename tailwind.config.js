/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        success: '#0ca678',
        warning: '#f59f00',
        error: '#e03131',
        info: '#1c7ed6',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['clamp(2rem, 8vw, 3rem)', { lineHeight: '1.2' }],
        'heading-2': ['clamp(1.5rem, 6vw, 2.25rem)', { lineHeight: '1.2' }],
        'heading-3': ['clamp(1.25rem, 4vw, 1.75rem)', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'border-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'border-rotate-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        'border-rotate': 'border-rotate 30s linear infinite',
        'border-rotate-reverse': 'border-rotate-reverse 20s linear infinite',
      },
    },
  },
  plugins: [],
}

