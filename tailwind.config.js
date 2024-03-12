/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


colors: {
  primary: '#EF4444',
  sec: '#2563EB',
  third:"#2563EB"
},
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
