const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs') // changed 'dist' to 'docs' for Github pages
  },
  watch: true,
};
