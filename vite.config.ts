import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            ">1%",
            "last 4 versions",
            "Firefox ESR",
            "not dead",
          ],
        }),
      ],
    },
  },
});
