/** @type {import('tailwindcss').Config} */
export default {
  content: [
         "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
     
        
        "./src/**/*.{js,ts,jsx,tsx,mdx}",

        // turborepo wala bhi ek add karna hai tailwidn m like this..
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

