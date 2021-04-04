module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
    	colors:{
    		twitter:{
          DEFAULT: '#1da1f2',
          dark: '#1a91f2'        
        }        
    	},
      backgroundImage: theme => ({
        'initial-page': "url('assets/img/login_background.png')",
      })
    },
  },
  variants: {
    extend: {  
      backgroundColor: ['active'],
      opacity: ['disabled']
    },
  },
  plugins: [],
}
