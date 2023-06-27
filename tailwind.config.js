/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      smx: '375px',
      mx: '425px',
      md: '480px',
      mdx: '520px',
      tb: '720px',
      tbx: '820px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1536px',
      '2k': '1920px',
      '3k': '2560px',
      '4k': '3500px'
    },

    fontSize: {
      sm: ['14px', '100%'],
      smm: ['14px', '150%'],
      base: ['16px', '140%'],
      md: ['18px', '130%'],
      lg: ['20px', '130%'],
      lgx: ['24px', '130%'],
      xl: ['32px', '125%'],
      '2xl': ['36px', '120%'],
      '3xl': ['48px', '120%'],
      '4xl': ['90px', '120%'],
      '5xl': ['180px', '120%']
    },

    extend: {
      colors: {
        'ui-blue': '#2B5DA2',
        'ui-black': '#313C4E',
        'ui-gray': '#62738D',
        'ui-dark-gray': '#E6E8ED',
        'ui-light-gray': '#F3F4F7',
        'ui-orange': '#F0A93B'
      }
    }
  },
  plugins: []
};
