// postcss.config.cjs
const plugins = [require('tailwindcss'), require('postcss-nested')];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano'));
}

module.exports = {
  plugins,
};
