module.exports = {
  mode: 'jit',
  content: [
    './*/*.html', 
    "./node_modules/flowbite/**/*.js"
  
  ],
  theme: {
    extend: {
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      }

      ,colors: {
        spotify: '#1DB954',
        soundcloud: '#ff7700',
        youtube: '#FF0000',
        ig: '#3f729b',
      }


    },
    plugins: [require('@tailwindcss/aspect-ratio')],
    
  },
  
  
}
