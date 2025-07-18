module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.cjs', // or .js if you didn't rename it
    }),
    require('autoprefixer'),
  ],
}
