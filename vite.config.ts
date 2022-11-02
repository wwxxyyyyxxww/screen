import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      //设置别名
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
