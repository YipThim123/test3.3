import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 添加 path 模块

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/test3.3/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置 @ 指向 src 目录
    },
  },
})
