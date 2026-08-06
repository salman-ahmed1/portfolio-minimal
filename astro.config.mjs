import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://sal3dvisuals.vercel.app",
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind()],
});
