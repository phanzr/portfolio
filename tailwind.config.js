/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',// => @media (min-width: 640px) { ... }
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    fontFamily: {
      //'sans': ['noto-sans', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      //'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Noto sans display'], //'Google Sans Display-Medium'
      'body': ['"noto-sans"'],
    },

    colors: {
        // Configure your color palette here these are defaulr colors
        'primary': 'rgb(34, 34, 85)', //blackberry
        'secondary': 'rgb(206, 177, 208)', //rose
        'third': 'rgba(0, 147, 121, 1)', //green
        'fourth': 'rgba(247, 214, 132, 1)', //yellow
        'bg-blur':{
          'primary': '#FCE5D0',//lightyellow
          'second':'#D0DDE9', // lightblue
          'third': '#98BAD2',//softblue
        },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-displayFont)']
      }
      // 'colors': {
      //   // Configure your color palette here these are defaulr colors
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   black: colors.black,
      //   white: colors.white,
      //   gray: colors.gray,
      //   emerald: colors.emerald,
      //   indigo: colors.indigo,
      //   yellow: colors.yellow,

      //   blackberry: rgb(34, 34, 85),
      //   rose: rgb(206, 177, 208),
      //   green: rgba(0, 147, 121, 1),
      //   yellow: rgba(247, 214, 132, 1),
      //   'bg-blur':{
      //     primary: '#FCE5D0',//lightyellow
      //     second:'#D0DDE9', // lightblue
      //     third: '#98BAD2',//softblue
      //   },
      // },

      //backgroundImage: {
        //'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        //'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      //},
    },
  },
  plugins: [],
}
