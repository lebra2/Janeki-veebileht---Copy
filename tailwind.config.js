module.exports = {
  mode: 'jit',
  content: [
    './*/*.html', 
    "./node_modules/flowbite/**/*.js"
  
  ],
  theme: {
    extend: {
      colors: {
        spotify: '#1DB954',
        soundcloud: '#ff7700',
        youtube: '#FF0000',
        ig: '#3f729b',
      }


    },
    plugins: [
      require('flowbite/plugin')
  ]
    
  },
  
  
}
