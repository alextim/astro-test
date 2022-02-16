// tailwind.config.cjs
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        text: 'black',
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
        brands: {
          skype: 'rgb(0, 175, 240)',
          viber: '#bcaec7',
          whatsapp: '#25d366',
          telegram: '#0088cc',
        },
      },
      fontFamily: {
        body: ['Helvetica', 'Arial', 'sans-serif'],
        heading: ['Oswald', 'fallback-heading-font', 'sans-serif'],
      },
      rotate: {
        225: '225deg',
      },
      spacing: {
        18: '4.5rem',
      },
      content: {
        empty: '""',
      },
    },
  },
};
