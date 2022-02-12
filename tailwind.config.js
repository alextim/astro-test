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
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
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
