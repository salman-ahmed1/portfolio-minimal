/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        "dark-surface": "hsl(var(--hero-bg))",
        background: "hsl(var(--background))",
        accent: "hsl(var(--accent))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
};
