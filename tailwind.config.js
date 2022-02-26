// tailwind.config.cjs
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
/*
  corePlugins: {

    // preflight: false,

    // We disable those because they add stuff to the CSS file even when unused
    filter: false,
    backdropFilter: false,
    ringWidth: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    // boxShadow: false,
    // transform: false,
    touchAction: false,
    scrollSnapType: false,
    // borderColor: false, // If we don't disable this, Tailwind will apply a default border color to all the elements
    // borderOpacity: false,
    // textOpacity: false,

    // Things we might need in the future but disable for now as they also add stuff
    fontVariantNumeric: false,
  },
*/
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
        action: {
          primary: 'cyan',
          highlite: 'white',
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
        'header': '3.5rem',
        'header-xl': '4.5rem',
      },
      content: {
        empty: '""',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.at-a': {
          cursor: 'pointer',
          textDecoration: 'none',
        },
        '.at-a-undecorated': {
          ':active, :hover, :focus': {
            outline: 0,
            textDecoration: 'none',
          },
        },
      })
    }),
    plugin(({ addBase, theme }) => {
      addBase({
        // Small reset, preflight include a lot of stuff we don't use so let's make our own
        '*, ::before, ::after': {
          boxSizing: 'border-box',
        },

        'html,body': {
          '-moz-osx-font-smoothing': 'grayscale',
          '-webkit-font-smoothing': 'antialiased',
          textRendering: 'optimizeSpeed',
          margin: 0,
          padding: 0,
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
        },



      })
    }),
  ],
};
