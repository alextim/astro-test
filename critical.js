const critical = require('critical');
critical.generate({
  inline: true,
  base: 'dist/',
  src: 'index.html',
  target: 'index.html',
  width: 1300,
  height: 900,
  inline: {
    strategy: 'swap'
  }
});
