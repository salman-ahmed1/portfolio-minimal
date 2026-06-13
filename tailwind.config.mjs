/** @type {import('tailwindcss').Config} */
export default {
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
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        "dark-border": "hsl(var(--dark-border))",
        card: "hsl(var(--card))",
        "dark-card": "hsl(var(--dark-card))",
      },
    },
  },
  plugins: [],
};
