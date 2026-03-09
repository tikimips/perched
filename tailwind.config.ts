import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "system-ui", "sans-serif"],
        display: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          50:  "#fdf8ec",
          100: "#f9edcc",
          200: "#f2d88b",
          300: "#ebc04a",
          400: "#d4a843",
          500: "#b8892a",
          600: "#9a6f1e",
          700: "#7a5516",
          800: "#5e4012",
          900: "#3d290b",
        },
        cream: {
          50:  "#fefefe",
          100: "#faf9f7",
          200: "#f5f4f0",
          300: "#eeecea",
          400: "#e5e3de",
        },
        apple: {
          gray1: "#f5f5f7",
          gray2: "#e8e8ed",
          gray3: "#d2d2d7",
          gray4: "#aeaeb2",
          gray5: "#8e8e93",
          gray6: "#636366",
          label: "#1d1d1f",
          secondary: "#6e6e73",
          tertiary: "#aeaeb2",
          blue: "#007aff",
          green: "#34c759",
          red: "#ff3b30",
          orange: "#ff9500",
          teal: "#5ac8fa",
        },
      },
      borderRadius: {
        "xl": "12px",
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
      },
      boxShadow: {
        "apple-sm": "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
        "apple":    "0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "apple-md": "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
        "apple-lg": "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
        "card":     "0 2px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
