import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    Unfonts({
      fontsource: {
        families: [
          "tajawal",
          {
            name: "tajawal",

            weights: [400, 500, 700],
            styles: ["normal"],
            subset: "arabic",
          },
        ],
      },
    }),
    ViteImageOptimizer({}),
  ],
});
