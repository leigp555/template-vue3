import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  build: {
    chunkSizeWarningLimit: 8000,
    rollupOptions: {
      output: {
        // 分包
        manualChunks(id) {
          let mid
          if (id.includes('node_modules')) {
            mid = id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
          return mid
        }
      }
    }
  }
})
