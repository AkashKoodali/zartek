import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pingOnce: {
          "50%": { transform: "scale(1.2)" },
          100: { transform: "scale(1)" },
        },
      },
      animation: {
        pingOnce: "pingOnce 0.5s cubic-bezier(0, 0, 0.2, 1) ",
      },
    },
    fontFamily: {
      sans: ["var(--font-tinos)"],
    },
  },

  plugins: [],
};
export default config;
