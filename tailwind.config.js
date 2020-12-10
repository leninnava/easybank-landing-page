module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // primary

      darkblue: "hsl(233, 26%, 24%)",
      limegreen: {
            DEFAULT: "hsl(136, 65%, 51%)",
            light: "hsl(136deg 100% 80%)"
      },
      brightcyan: {
        DEFAULT: "hsl(192, 70%, 51%)",
        light: "hsl(192deg 100% 74%)"
      },

      //neutrals

      grayishblue: "hsl(233, 8%, 62%)",
      lightgrayishblue: "hsl(220, 16%, 96%)",
      verylightgray: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)"
  },
  extend: {},
  fontFamily: {
    sans: ["Public Sans", "sans-serif"]
  },
},

  variants: {
  extend: { 
    
   },
},
plugins: [],
}
