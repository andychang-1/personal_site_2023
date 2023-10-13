import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import { flowPlugin, esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ["@babel/preset-flow"],
      },
    }),
    jsconfigPaths(),
    flowPlugin(),
  ],
  assetsInclude: ["./src/assets/"],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()],
    },
  },
});
