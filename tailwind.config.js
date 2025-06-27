/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#cf316e",
        secondary: "#68143d",
        "top-banner":"#d643b6",     
        "brand-pink": "#C71585", 
        "desai-maroon": "#3B0A16",

    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],

}
}
