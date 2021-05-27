const path = require('path')

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  plugins: [
    //
  ],
  future: {
    webpack5: true,
  },
  env : {
    //
  }
}