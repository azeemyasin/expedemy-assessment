import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trueGray: {
          50: "#F8FAFC",
          800: "#262626",
          900: "#1D1C1C",
        },
        blueGray: {
          100: "#F1F5F9"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        small: "16px",
        large: "20px",
      },
    },
  },
  plugins: [],
}

export default config
