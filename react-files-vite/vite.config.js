import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import { flowPlugin, esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "./assets") + "/[!.]*", // 1️⃣
          dest: "./assets", // 2️⃣
        },
      ],
    }),
    react({
      babel: {
        presets: ["@babel/preset-flow"],
      },
    }),
    jsconfigPaths(),
    flowPlugin(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()],
    },
  },
});
