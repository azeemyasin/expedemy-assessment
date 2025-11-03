import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '786px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        trueGray: {
          50: "var(--true-gray-50)",
          800: "var(--true-gray-800)",
          900: "var(--true-gray-900)",
        },
        blueGray: {
          100: "var(--blue-gray-100)",
        },
        background: "var(--background)",
        brandWhite: "var(--brand-white)",
        trueGradientText: "var(--true-gradient-text-800)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        small: "16px",
        large: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
