/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        flash : 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        spincircle: 'spincircle 1.5s ease 1',
        droop: 'droop 1s ease infinite',
        up_in: 'upin 1s ease infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        spincircle: {
          '50%': {transform: 'rotate(180deg)'},
          '100%': {transform:'rotate(360deg)'},
        },
        droop: {
          '50%': {transform: 'scale(1.5)'},
          '100%': {transform: 'scale(1.0)'},
        },
        upin: {
          'from': {opacity: '0', bottom: '0%'},
          'to': {opacity: '1', bottom: '50%'}
      }
      },
    },
  },
  plugins: [],
}
