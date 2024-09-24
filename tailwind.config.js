/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
		  fontFamily: {
		  	inter: ['var(--font-inter)']
		  },
    },
  },
  plugins: [],
}

