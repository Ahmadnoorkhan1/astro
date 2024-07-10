import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://velvety-medovik-4d52ec.netlify.app/",
  integrations: [preact()]
});