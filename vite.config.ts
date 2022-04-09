import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";
import viteEslint from "vite-plugin-eslint";
import viteStylelint from "@amatlash/vite-plugin-stylelint";
import svgr from "vite-plugin-svgr";
import { join } from "path";
import viteImagemin from "vite-plugin-imagemin";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// 是否为生产环境，在生产环境一般会注入 NODE_ENV 这个环境变量，见下面的环境变量文件配置
const isProduction = process.env.NODE_ENV === "production";
// 填入项目的 CDN 域名地址
const CDN_URL = "xxxxxx";

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : "/",
  plugins: [
    react(),
    WindiCSS(),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/
    }),
    svgr(),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9]
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [join(__dirname, "src/assets/icons")]
    })
  ],
  resolve: {
    alias: { "@assets": join(__dirname, "src/assets") }
  }
});
